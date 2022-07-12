import React from 'react'
import './styles.scss'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    heading: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightRegular,
      
    }
  }));


function Faqs() {
    
  const classes = useStyles();
    return (
        <div className="faqssection">
            
            <div className={classes.root}>
                            
                            
                    <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Do I need to set up an account to place an order?
</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Yes, to place an order on ANVSHN, it’s mandatory to set up an account. You can browse through our collection and select the item you like to purchase without setting up an account.
                                < br/>
                                < br/>
                            Register with us and you'll be able to enjoy the following benefits through your ANVSHN account:
                            < br/>
                            < br/>
                            
                            Track your orders and review past purchases.
                            < br/>
                            < br/>
                            Request your return or exchange directly from your account.
                            < br/>
                            < br/>
                            Save your address and card details so you can shop even quicker next time.
                            < br/>
                            < br/>
                            Manage your account details, address book, and email preferences,
                            
                            To create an account, click on 'SIGN IN' and fill in your details.

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">How do I make a purchase/ place an order on Anvshn?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                           

                            ANVSHN provides you with a hassle-free procedure for ordering your favorite, merchandise.
                            < br/>
                            < br/>

                            If you are aware of what you are looking for, browse through our categories Men, WOMEN, and Footwear links. 
                            < br/>
                            < br/>
                            If you want to purchase from a specific designer, check the DESIGNER link and you can browse them in alphabetic order.
                            < br/>
                            < br/>
                            Once you have found the item/outfit, select your size and click on add to cart.
                            < br/>
                            < br/>
                            If you wish to customize the item according to your measurement, click on “Customise your product” and fill out your body measurements according to design.
                            Review your selected items in the cart. You can move the item to a wishlist if you like to buy it later or REMOVE if you no longer wish to purchase.
                            Click on “CHECKOUT” to finish your purchase.
                            < br/>
                            < br/>

                            *  if you have a coupon code, you can use the code in the given section.

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">What size should I order?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            The size of the product varies among designers. To check your size, simply click on the 'size chart' link which you will find on every product page. The size chart will convert the international size according to product measurement which you can simply check with your body measurement.

If you wish to customize the item according to your measurement, click on “Customise your product” and fill out your body measurements according to design.

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">What payment methods does ANVSHN accept?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            We accept payment done by credit card, debit card, UPI, EMI, and wallet. We do not accept any other payment method currently.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Does Anvshn offer alterations?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            After purchase, if the outfit doesn’t fit you, you can opt for our one-time alteration service without any alteration charge.on selected products. You can check on the product page if the product is eligible for “No cost alteration”. The alteration service is only for customers served in INDIA. For assistance please mail at “customercare@anvshn.com”

Please note that after requesting alteration service, the product will no longer eligible for return/exchange. The shipping charge will be paid by the customer. 

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">I need help deciding what to buy. Can I speak to a stylist?
</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            If you need help in deciding what to wear for a particular occasion or what colors will suit you, our stylist will help you out. You can contact our stylist at +91-0000000000 from Monday to Saturday [10 am-6 pm] or mail your concerns at Stylist@anvshn.com.

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Does ANVSHN ship to multiple addresses? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Unfortunately, we do not ship the products of a single order to multiple addresses. You need to place a separate order for a separate address. For bulk or corporate orders, you can mail us at support@anvshn.com
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Can I change my shipping address after my order has been dispatched? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            You can change your address within 24 hours of placing an order. Please contact customer care at +91-0000000000 or customercare@anvshn.com.
                            <br />
                            Unfortunately, the address can’t be changed once the order has been dispatched. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Can I add items to an existing order?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Unfortunately, we don’t provide an option to add more products to the existing order or combine orders. If you wish to purchase those products, you have to place a new order. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Can I place an order for an item that is out of stock? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            If you like to order a product that is currently “out of stock” you can mail the details of the product and size at customercare@anvshn.com and we will get back to you. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">How do I know if my order has been placed? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            After placing the order, you will receive an email confirmation with your order details and a confirmation text on your mobile number.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">How do I track my order? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Once you have placed an order, you can track your order by going to your account and clicking on your recent order. You will be able to view the date your item is in the process to the date of shipment to the date of your item being in the process of delivery.
                             </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Can I cancel my order once it has been placed? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            You can cancel your order within 24 hours of placing the order. After 24 hours, the order can’t be canceled. We do not provide a refund of the items which has been sold.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Which items can be returned? How do I return or exchange a product? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Check out our “Return and Exchange” policy for detailed information.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">I haven’t received all items that I have purchased. When will it be delivered? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            If you have purchased multiple items, it is possible that items will be dispatched separately. You can view the status by logging in to your Anvshn account.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">How long will it take to receive my order?t? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            The delivery date of each product is mentioned on the product page. If you wish to receive a product on an express basis, mail the details at customercare@anvshn.com and we will get back to you with the required formalities
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Is my package insured? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            All items are insured against accidental damage and theft while in transit from Anvshn office to the shipping address. However, once your items have been delivered to your address, they are no longer covered under insurance. Upon arrival, if your box is damaged, we recommend that you refuse the delivery
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">Is it safe to use my credit card? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Anvshn accepts credit card payments through a secure online server, as we are aware of the importance of the security of your details. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">What additional duties and taxes will I have to pay? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            For Indian Customers product prices, displayed are inclusive of all taxes and duties. For International, Customer products are shipped on a DDU (Delivery Duty Unpaid) basis, which means product prices displayed are exclusive of all import taxes/duties. As the recipient, you are liable to pay all import duties, custom duty, local Sales/Vat taxes, and any other taxes levied by the country you are residiWithinng or you are importing the product to. Payment of these taxes/duties at the time of delivery is necessary to get the delivery of product from transport/courier agencies
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">I have returned an item. When will I see the credit in my refund? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            7 business days
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="classHeading">My item has arrived damaged or incorrect. What do I do? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            All the items on Anvshn go through a quality check before being shipped. If we have sent you an incorrect item, garment size, or damaged item, please send us an email at contactus@anvshn.com with a photograph of the garment. We will return it to you with the correct item/ garment size.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        
                        </div>
        </div>
    )
}

export default Faqs
