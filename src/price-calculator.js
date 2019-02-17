var calculatePrice = function (userType, productType, price, publishedDate) {
	// additional price
	price += env['additionalPrice'][productType]
	// rebate based on user type, date
	if (publishedDate.toDateString() == new Date().toDateString()) {
		price -= env['userType'][userType]['rebate']['newPublishedToday'] 
	} else if(userType === 'company') {
		price -= env['userType'][userType]['rebate']['amount']
	}
	return price
}
