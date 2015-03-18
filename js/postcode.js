	$("#locationFinder").click(function(event){
		
		var result = 0;
		
		$(".alert").hide();
		
		event.preventDefault();
		
		$.ajax({
		
			type: "GET",
			url: "https://maps.googleapis.com/maps/api/geocode/xml?address="+encodeURIComponent($('#address').val())+"&sensor=false&key=AIzaSyBt1NNqg7EQ1CnJquBwRKu_BYNmaUfcLZ0",
			dataType: "xml",
			success: processXML,
			error: error
		}); 
		
		function error(){
		
			$("#fail2").fadeIn();
		
		}
			
		function processXML(xml){
			
			$(xml).find("address_component").each(function() {
			
				if($(this).find("type").text() == "postal_code"){
				
				$('#success').html("The postcode for the area you searched is "+$(this).find('long_name').text()).fadeIn();
					
					result = 1;
				}
				
			});
			
			if(result==0){
				
				$("#fail").fadeIn();
			}
			
		}	
	});
		