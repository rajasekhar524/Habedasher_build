import React, { useState,useEffect,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart, fetchProductsDressType,fetchProductsAllfilter} from './../../redux/Products/products.actions';
import Product from './Product/Product';
import FormSelect from './../../components/forms/FormSelect/';
import LoadMore from './../../components/LoadMore';
import './productresults.scss';
import { BiCaretDown } from "react-icons/bi";
import {loadingState} from './../../redux/Loading/loading.actions'
import FilterAccordian from './FilterAccordian/FilterAccordian';
import Filterinput from './Filterinput/Filterinput';
import { motion } from "framer-motion"
import { MultiSelectCheckBox } from "multi-select-checkbox/dist/MultiSelectCheckBox";
import Sortfilter from './Sortfilter/Sortfilter';

const mapState = ({ loadingData,productsData }) => ({
  products: productsData.products,
  loading:loadingData.loading
});

const transition = {
  duration: 0.2,
  ease: [0.23, 0.13, 0.53, 0.96]
};

// const imageVariants = {
//   exit: { y: "50%", opacity: 0, transition },
//   enter: {
//     y: "0%",
//     opacity: 1,
//     transition
//   }
// };

const backVariants = {
  exit: { y: 0.1, opacity: 0.2, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0, ...transition }}
};


const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType,filterDresstype } = useParams();
  const { products,loading } = useSelector(mapState);
  const {dresstype,size,price} = useParams();
  const { data, queryDoc, isLastPage } = products;
  const [testing, setTesting] = useState(false)
  const [openacc, setOpenacc] = useState(false)
  const [clickRadio, setClickRadio] = useState('')
  const [filteroc, setFilteroc] = useState(false)
  const [filterP, setFilterP] = useState()
  const [click, setClick] = useState()
  const [clickme, setClickme] = useState()
  const [selectsort, setSelectsort] = useState(false)
  const [showsort,setShowsort] = useState(false)


  const [filters,setFilters] = useState({
    productPrice: [],
    productGender:['mens'],
    productCategory:[],
    productColor:[]
  })

  const [testm, setTestm] = useState([])
  const [hiding,setHiding] = useState(true)

  const handlehide = () =>{
    // setHiding(!hiding)
  }

  const sortlow = () =>{
    console.log(selectsort)
    setSelectsort(false)
   
  }
  const sorthigh = () =>{
    console.log(selectsort)
    setSelectsort(true)
   
  }



  const [sizes, setSizes] = useState([
    { id: 'S', name: "S", title: "S" },
    { id: 'M', name: "M", title: "M" },
    { id: 'L', name: "L", title: "L" },
    { id: 'XL', name: "XL", title: "XL" },
    { id: 'XXL', name: "XXL", title: "XXL" }
  ])
  const CheckBoxList = [
    {
      label: 'Maroon',
      value: 'maroon',
    },
    {
      label: 'White',
      value: 'white',
    },
    {
      label: 'Cream',
      value: 'cream',
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Reapeat again!",
      value: "Reapeat again!",
    },
    {
      label: "Reapeat again again!",
      value: "Reapeat again again!",
    },
  ];
  const [selectedValue, setSelectedValue] = useState([]);



  // const filters = {
  //   productPrice: [],
  //   productCategory:['mens']
  // };

// console.log('sshdiie',data)

  useEffect(async()=>{
    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
    function filterPlainArray(array, filters) {
      const filterKeys = Object.keys(filters);
      // console.log('keys',filterKeys)
      return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
          // ignores an empty filter
          if (!filters[key].length) return data;
          return filters[key].find(filter => getValue(filter) === getValue(item[key]));
        });
      });
    }
  

    const filtered = await filterPlainArray(data, filters);

    setFilterP(filtered)
  
  },[data,filters,click,clickme])
  

  useEffect(()=>{
    // history.push(`/search/dresstype/${dresstypes}/${sizes}/${prices}`);
 
    dispatch(
      fetchProductsDressType({ filterDresstype }),
    )
  },[filterDresstype])
 
  useEffect(()=>{
    if(data)
    for(let dat of data){
      console.log(dat.productColor.toLowerCase())
      setTestm([...testm,dat.productColor.toLowerCase()])
    }
    console.log(testm) 
  },[clickme])
  
  
 

  useEffect(() => {
    if(filterType != null)
    dispatch(
      fetchProductsStart({ filterType }),
    )
  }, [filterType]);


  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  const arr = [10799,9899]

  // useEffect(()=>{
 
  //     // console.log('clickme',i.value)
  //   for(let i of selectedValue){
  //     console.log(i)
  //     filters['productPrice'].push(i.value)
  //   }

  // },[clickme])
  // useEffect(()=>{
    
  // },[filters])

  

  
  // const handlefilter =() =>{
  //   // console.log(selectedValue)
  //   for(let i of selectedValue){
  //     // console.log('clickme',selectedValue)
  //     // console.log('clickme',i.value)
  //     filters['productPrice'].push(i.value)

  //   }
  // }

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Mens',
      value: 'mens'
    }, {
      name: 'Womens',
      value: 'womens'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsDressType({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

 

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  const clickacc = () =>{
    setOpenacc(!openacc)
    // console.log('clicked')
  }

  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={backVariants} className="products_section_i">

        
      <div className='product_header_margin'>
      </div>

     {filterDresstype !=null?<div className='productpage_heading'>
          <div className='productpage_heading_nav'>
              men / clothing /
          </div>
          
          <div className='productpage_heading_caption'>
              {filterDresstype} / {filterDresstype}
          </div>
      </div>:''} 

      {/* <div onClick={()=>filters['productPrice'].push('2343')}>
        click
      </div>
      <div onClick={()=>filters['productPrice'].push('122')}>
        click
      </div>
      <div onClick={()=>setClick(!click)}>
        click
      </div> */}

      {/* <FormSelect {...configFilters} /> */}
      <div className='filter_sort_section'>
            <div onClick={()=>setFilteroc(!filteroc)} className='filter_section'>
                <div className='filter_title'>
                  {/* Filters */}
                </div>
                <div className='filter_icon'>
                  {/* <BiCaretDown /> */}
                </div>
            </div>
            <div className='sort_section'>
              <div className='sort_icon' onClick={()=>setShowsort(!showsort)}>
                  Sort by
              </div>
              <div className={showsort?'sort_icon_rotate':'sort_icon'}>
                <BiCaretDown />
                </div>
                {showsort?<div className='sort_section_list'>
                  {showsort?<Sortfilter sortlow = {sortlow} sorthigh = {sorthigh} />:''}
                </div>:''}
            </div>
      </div>
      {/* <p>{JSON.stringify(selectedValue.LABEL)}</p> */}
            
            
          
            {/* <div onClick={()=>setClickme(!clickme)}>clickme</div> */}
        
            {/* <div onClick={handlehide}>sdsdf
              {hiding?<div>
                <MultiSelectCheckBox
                    selectAllShow={false}
                    selectedCheckBox=
                    {
                      [
                      // {
                      //   label: 'Maroon',
                      //   value: 'maroon',
                      // },
                      // {
                      //   label: 'White',
                      //   value: 'white',
                      // }
                    ]
                  }
                    // searchLabelName="Search : "
                    searchLabelClassName="searchLabelClassName"
                    searchFilterParentDivClassName="searchFilterParentDivClassName"
                    searchFilterClassName="searchFilterClassName"
                    searchPlaceHolderName="Search Here..."
                    showSearchBox={true}
                    selectAllClassLabelName="select_all_label_class_name"
                    listOfCheckBoxItemsLabelClassName="list_of_checkbox_item_label_class_name"
                    selectAllParentDivClassName="selectAllParentDivClassName"
                    listOfAllCheckBoxParentDivClassName="listOfAllCheckBoxParentDivClassName"
                    selectAllShowClassName="select_all_checkbox_classname"
                    listOfCheckBoxItemsClassName="list_of_all_checkbox_classname"
                    CheckBoxList={CheckBoxList}
                    selectAllLabelName="Select All..."
                    onChange={function (item) {
                      //  get All list of selected Item....
                      console.log(item)
                      setSelectedValue(item)
                      filters['productColor'].splice(0,filters['productColor'].length);
                      item.map((ite)=>{
                        filters['productColor'].push(ite.value)
                      })
                    }}
                  />
              </div>:''}
              </div> */}
        {filteroc?<div className='productresult_filter_section'>
            <FilterAccordian title='Shop by Ocassion' openacc={openacc} handleAcc = {clickacc}>
                {/* <Filterinput title='Marriage' handleChange={e=>setClickRadio('thing')} />
                <Filterinput title='casual' handleChange={e=>setClickRadio('thingOn')} />
                <Filterinput title='formal' handleChange={e=>setClickRadio('thingOln')} /> */}
                <MultiSelectCheckBox
                    selectAllShow={false}
                    selectedCheckBox=
                    {
                      selectedValue
                    }
                    // searchLabelName="Search : "
                    searchLabelClassName="searchLabelClassName"
                    searchFilterParentDivClassName="searchFilterParentDivClassName"
                    searchFilterClassName="searchFilterClassName"
                    searchPlaceHolderName="Search Here..."
                    showSearchBox={true}
                    selectAllClassLabelName="select_all_label_class_name"
                    listOfCheckBoxItemsLabelClassName="list_of_checkbox_item_label_class_name"
                    selectAllParentDivClassName="selectAllParentDivClassName"
                    listOfAllCheckBoxParentDivClassName="listOfAllCheckBoxParentDivClassName"
                    selectAllShowClassName="select_all_checkbox_classname"
                    listOfCheckBoxItemsClassName="list_of_all_checkbox_classname"
                    CheckBoxList={CheckBoxList}
                    selectAllLabelName="Select All..."
                    onChange={function (item) {
                      //  get All list of selected Item....
                      // console.log(item)
                      // setSelectedValue(item)
                      // console.log('sec',selectedValue)
                      filters['productColor'].splice(0,filters['productColor'].length);
                      item.map((ite)=>{
                        filters['productColor'].push(ite.value)
                        setSelectedValue([...selectedValue,ite])
                      })
                    }}
                  />
            </FilterAccordian>
            
           
          </div> : "" }
   
      <div className="product_results">
        {filterP && filterP.sort(!selectsort?(a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice):(a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice)).map((product, pos) => {
          // const { productThumbnail, productName, productPrice } = product;
          // if (!productThumbnail || !productName ||
          //   typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Product key={pos} {...configProduct} />
          );
        })}
      </div>

      {/* {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )} */}

    </motion.div>
  );
};

export default ProductResults;