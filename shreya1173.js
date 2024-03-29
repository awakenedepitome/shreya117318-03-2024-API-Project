const axios = require('axios');

async function createInvestmentAccount() {
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        name: 'Shreya',
        email: 'shreya1173.be21@chitkarauniversity.edu.in',
        rollNumber: 2111001173,
        phone: 0000000000
    };

    try {
        const response = await axios.post(url, data, { headers: headers });
        const accountNumber = response.data.accountNumber;
        console.log('Account Number:', accountNumber); 
        return accountNumber;
    } catch (error) {
        console.error(error.response.data);
    }
}

async function buyStocks() {
    const accountNumber = await createInvestmentAccount();

    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
    const headers = {
        'Content-Type': 'application/json',
        'bfhl-auth': 2111001173
    };
    const data = {
        company: 'Bajaj Finserv',
        currentPrice: 13400,
        accountNumber: accountNumber,
        githubRepoLink: 'https://github.com/awakenedepitome'
    };

    try {
        const response = await axios.post(url, data, { headers: headers });
        console.log(response.data);
    } catch (error) {
        console.error(error.response.data);
    }
}

buyStocks();
