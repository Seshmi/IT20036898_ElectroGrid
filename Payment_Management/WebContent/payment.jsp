<%@page import="com.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/payment.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6"> 
<h1>Payment Management</h1>
<form id="formPayment" name="formPayment" method="post" action="payment.jsp">

 Holder Name: 
 <input id="holder_name" name="holder_name" type="text" 
 class="form-control form-control-sm">
 <br> Card Type: 
 <input id="ctype" name="ctype" type="text" 
 class="form-control form-control-sm">
 <br> Card Number: 
 <input id="card_no" name="card_no" type="text" 
 class="form-control form-control-sm">
 <br> CVV: 
 <input id="cvv" name="cvv" type="text" 
 class="form-control form-control-sm">
 <br> Expire Month : 
 <input id="exp_month" name="exp_month" type="text" 
 class="form-control form-control-sm">
 <br> Expire year : 
 <input id="exp_year" name="exp_year" type="text" 
 class="form-control form-control-sm">
 <br> Total Amount : 
 <input id="total" name="total" type="text" 
 class="form-control form-control-sm">
 <br> Date of the Payment : 
 <input id="pay_date" name="pay_date" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidpay_idSave" 
 name="hidpay_idSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divPaymentGrid">
 <%
 Payment paymentObj = new Payment();
 out.print(paymentObj.readPayment()); 
 %>
</div>
</div> </div> </div>
</body>
</html>