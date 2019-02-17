describe('price calculator', function(){
	
	it('should calc price right', function(){
		var calculatedPrice = 0;
		var userType = 'company';
		var productType = 'new';
		var price = 100;
		var publishedDate = new Date();

		var expected = 115;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

});