$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validatePaymentForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidpay_idSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "PaymentAPI", 
 type : type, 
 data : $("#formPayment").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onPaymentSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onPaymentSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divPaymentGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hidpay_idSave").val(""); 
$("#formPayment")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
			$("#hidpay_idSave").val($(this).data("pay_id")); 
			$("#pay_id").val($(this).closest("tr").find('td:eq(0)').text());
		 	$("#holder_name").val($(this).closest("tr").find('td:eq(1)').text()); 
		 	$("#ctype").val($(this).closest("tr").find('td:eq(2)').text()); 
		 	$("#card_no").val($(this).closest("tr").find('td:eq(3)').text()); 
		 	$("#cvv").val($(this).closest("tr").find('td:eq(4)').text()); 
			$("#exp_month").val($(this).closest("tr").find('td:eq(5)').text());
			$("#exp_year").val($(this).closest("tr").find('td:eq(6)').text());
			$("#total").val($(this).closest("tr").find('td:eq(7)').text());
			$("#pay_date").val($(this).closest("tr").find('td:eq(8)').text());
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "PaymentAPI", 
		 type : "DELETE", 
		 data : "pay_id=" + $(this).data("pay_id"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onPaymentDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onPaymentDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divPaymentGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validatePaymentForm()
{
	// HOLDER NAME
	if ($("#holder_name").val().trim() == "")
	{
	return "Insert Holder Name.";
	}
	// CARD TYPE
	if ($("#ctype").val().trim() == "")
	{
	return "Insert Card Type.";
	}
	// CARD NUMBER
	if ($("#card_no").val().trim() == "")
	{
	return "Insert Card Number.";
	}
	// CVV
	if ($("#cvv").val().trim() == "")
	{
	return "Insert CVV.";
	}
	// EXPIRE MONTH
	if ($("#exp_month").val().trim() == "")
	{
	return "Insert Expire Month.";
	}
	// EXPIRE YEAR
	if ($("#exp_year").val().trim() == "")
	{
	return "Insert Expire Year.";
	}
	// TOTAL AMOUNT
	if ($("#total").val().trim() == "")
	{
	return "Insert Total Amount.";
	}

	// PAYED DATE
	if ($("#pay_date").val().trim() == ""){
		
		return "Insert Payment Date.";
	}
	return true;
}