let submitbtn = document.querySelector("#submit");
let output = document.querySelector(".result");
let feildsHeading = document.querySelector("#topinputheading");
let tableName = document.querySelector("#tableName");
let branchCode = document.querySelector("#branchCode");
let branchCodediv = document.querySelector(".tableandbranch")
let inputBarcodes = "";
let quoteBarcode = "";
let updateInactiveBtn = document.querySelector("#selectQuery");
let boxHeading = document.querySelector(".boxheading");
let textarea = document.querySelector(".textarea");
let copyBtn = document.getElementById("copyBtn");
let showBtn = document.getElementById("showBtn");
let numberofrows = document.querySelector(".noofrows");
let numberQuery = 0;
let finalCOAQuery = "";
let finalQuery = "";
submitbtn.addEventListener("click", function () {
    if (updateInactiveBtn.value === "update-SaleRate") {
        SalerateUpdateQuery();
    }
    else if (updateInactiveBtn.value === "insertCustomer") {
        customerInsertQuery();
    }
    else if (updateInactiveBtn.value === "update-SKU") {
        skuUpdateQuery()
    }
});


updateInactiveBtn.addEventListener("click", function () {
    if (updateInactiveBtn.value === "update-SaleRate") {
        boxHeading.innerHTML = "<h2>BARCODES:</h2><h2>SALE_RATE:</h2>";
        textarea.innerHTML = "<textarea name=''class='barcodeBox' placeholder='Paste Barcodes here...' wrap='soft'></textarea><textarea name=''class='saleRateBox' placeholder='Paste Sales here...' wrap='soft'></textarea>"
        branchCodediv.innerHTML = "<input type='text' placeholder='tableName' id='tableName' value='items'>"
        feildsHeading.innerHTML = "<h2>Table Name</h2>"
    }

    else if (updateInactiveBtn.value === "insertCustomer") {
        boxHeading.innerHTML = "<h2>NAME:</h2><h2>ADDRESS:</h2><h2>PHONE:</h2>";
        textarea.innerHTML = "<textarea name='' class='nameBox' placeholder='Paste Namwe here...' wrap='soft'></textarea><textarea name='' class='addressBox' placeholder='Paste Address here...' wrap='soft'></textarea><textarea name='' class='phoneBox' placeholder='Paste Phone Here..' wrap='soft'></textarea>"
        branchCodediv.innerHTML = "<input type='text' placeholder='tableName' id='tableName' value='customers'><input type='text' placeholder='Branch Code' id='branchCode' value='0001'><input type='text' placeholder='AccountCode' id='AccountCode' value='0002'>"
        feildsHeading.innerHTML = "<h2>Table Name</h2><h2>Branch Code</h2><h2>Account Code</h2>"
        // <p id='accoundCodep'></p><h2>ACC CODE:</h2>
    }
    else if (updateInactiveBtn.value === "update-SKU") {
        boxHeading.innerHTML = "<h2>BARCODES:</h2><h2>SKU:</h2>";
        textarea.innerHTML = "<textarea name=''class='barcodeBox' placeholder='Paste Barcodes here...' wrap='soft'></textarea><textarea name=''class='skuBox' placeholder='Paste SKU here...' wrap='soft'></textarea>"
        branchCodediv.innerHTML = "<input type='text' placeholder='tableName' id='tableName' value='items'>"
        feildsHeading.innerHTML = "<h2>Table Name</h2>"
    }

    else {
        branchCodediv.innerHTML = ""
        boxHeading.innerHTML = "";
        textarea.innerHTML = "";
        output.innerHTML = "";
        feildsHeading.innerHTML = "";

    }
})
//FOR SALE RATE UPDATE QUERY
function SalerateUpdateQuery() {
    let barcodes = document.querySelector(".barcodeBox");
    let valueBarcodes = barcodes.value.trim(); // Remove extra spaces
    let barcodesArray = valueBarcodes.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes

    let saleRate = document.querySelector(".saleRateBox");
    let valueSaleRate = saleRate.value.trim(); // Remove extra spaces
    let saleRateArray = valueSaleRate.split(/\n/).map(rate => rate.trim()); // Split and trim sale rates

    // Ensure that empty lines are filtered out
    barcodesArray = barcodesArray.filter(barcode => barcode !== "");
    saleRateArray = saleRateArray.filter(rate => rate !== "");


    // Ensure tableName is provided
    let tableName = document.querySelector("#tableName");
    if (tableName.value.trim() === "") {
        output.textContent = "Please provide a table name!";
        return;
    }

    // Create separate 'UPDATE' queries for each barcode-saleRate pair
    let formattedQueries = barcodesArray.map((barcode, index) => {
        return `UPDATE ${tableName.value} SET sale_rate = ${saleRateArray[index]} WHERE barcode = '${barcode}';`;
    });

    // Join all the queries with a newline character for output
    finalQuery = formattedQueries.join("\n");

    for (let i = 1; i <= formattedQueries.length; i++) {
        numberQuery = i;
        numberofrows.textContent = "ROWS:"+ numberQuery;
    }

    // Output validation and displaying the query
    if (valueBarcodes === "" && valueSaleRate === "") {
        output.textContent = "Please Paste Data!";
    } else if (valueBarcodes !== "" && valueSaleRate === "") {
        output.textContent = "Please Paste Sale Rate!";
    } else if (valueBarcodes === "" && valueSaleRate !== "") {
        output.textContent = "Please Paste Barcode!";
        // Handle case where the number of barcodes and sale rates do not match
    } else if (barcodesArray.length !== saleRateArray.length) {
        output.textContent = "The number of Barcodes and Sale Rates do not match!";
    } else {
        output.textContent = finalQuery; // Display the generated SQL queries
    }
    // Clipboard Button validation and displaying
    if (output.innerHTML === "" || output.textContent === "Please Paste Data!"
        || output.textContent === "Please Paste Sale Rate!" || output.textContent === "Please Paste Barcode!" ||
        output.textContent === "The number of Barcodes and Sale Rates do not match!") {
    }

    else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
    };
};

//FOR SALE RATE UPDATE QUERY
function skuUpdateQuery() {
    let barcodes = document.querySelector(".barcodeBox");
    let valueBarcodes = barcodes.value.trim(); // Remove extra spaces
    let barcodesArray = valueBarcodes.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes

    let sku = document.querySelector(".skuBox");
    let valuesku = sku.value.trim(); // Remove extra spaces
    let skuArray = valuesku.split(/\n/).map(rate => rate.trim()); // Split and trim sale rates

    // Ensure that empty lines are filtered out
    barcodesArray = barcodesArray.filter(barcode => barcode !== "");
    skuArray = skuArray.filter(rate => rate !== "");


    // Ensure tableName is provided
    let tableName = document.querySelector("#tableName");
    if (tableName.value.trim() === "") {
        output.textContent = "Please provide a table name!";
        return;
    }

    // Create separate 'UPDATE' queries for each barcode-saleRate pair
    let formattedQueries = barcodesArray.map((barcode, index) => {
        return `UPDATE ${tableName.value} SET SKU = ${skuArray[index]} WHERE barcode = '${barcode}';`;
    });

    // Join all the queries with a newline character for output
    finalQuery = formattedQueries.join("\n");

    for (let i = 1; i <= formattedQueries.length; i++) {
        numberQuery = i;
        numberofrows.textContent = "ROWS:" + numberQuery;
    }

    // Output validation and displaying the query
    if (valueBarcodes === "" && valuesku === "") {
        output.textContent = "Please Paste Data!";
    } else if (valueBarcodes !== "" && valuesku === "") {
        output.textContent = "Please Paste SKU!";
    } else if (valueBarcodes === "" && valuesku !== "") {
        output.textContent = "Please Paste Barcode!";
        // Handle case where the number of barcodes and sale rates do not match
    } else if (barcodesArray.length !== skuArray.length) {
        output.textContent = "The number of Barcodes and SKU do not match!";
    } else {
        output.textContent = finalQuery; // Display the generated SQL queries
    }
    // Clipboard Button validation and displaying
    if (output.innerHTML === "" || output.textContent === "Please Paste Data!"
        || output.textContent === "Please Paste SKU!" || output.textContent === "Please Paste Barcode!" ||
        output.textContent === "The number of Barcodes and SKU do not match!") {
    }

    else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
    };
};

//FOR CUSTOMER INSERT QUERY
submitbtn.addEventListener("click", function () { })
function customerInsertQuery() {
    let names = document.querySelector(".nameBox");
    let nameArray = names.value.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes

    let address = document.querySelector(".addressBox");
    let addressArray = address.value.split(/\n/).map(rate => rate.trim()); // Split and trim sale rates

    let phone = document.querySelector(".phoneBox");
    let phoneArray = phone.value.split(/\n/).map(rate => rate.trim()); // Split and trim phone
    let accountdigit = document.querySelector("#AccountCode").value;
    let accountnumber = Number(accountdigit);
    console.log(accountdigit)

    // Ensure that empty lines are filtered out
    nameArray = nameArray.filter(name => name !== "");
    addressArray = addressArray.filter(address => address !== "");
    phoneArray = phoneArray.filter(phone => phone !== "");


    // Ensure tableName is provided
    let tableName = document.querySelector("#tableName");
    if (tableName.value.trim() === "") {
        output.textContent = "Please provide a table name!";
        return;
    }

    // Ensure branchcode is provided
    let branchCode = document.querySelector("#branchCode");
    if (branchCode.value.trim() === "") {
        output.textContent = "Please provide a Brnach Code!";
        return;
    }

    // Create separate 'UPDATE' queries for each customer pair
    let formattedQueries = nameArray.map((name, index) => {
        return `INSERT INTO ${tableName.value} (BranchCode, CustomerCode, Customer, Address, AreaCode, CityCode, PhoneNo, FaxNo, MobileNo, EmailID, GUID, RecordNo, created_at, updated_at, AreaId, DOB, gender, customer_category, AccountCode)
        VALUES ('${branchCode.value}','01-002-004-${(accountnumber + index).toString().padStart(4, '0')}', '${nameArray[index]}', '${addressArray[index]}', '', '', '${phoneArray[index]}', '', '${phoneArray[index]}', '', 0, 0, '2021-08-26 11:30:00', '2021-08-26 11:30:00', '0', '0000-00-00 00:00:00', '', '', '01-002-004-${(accountnumber + index).toString().padStart(4, '0')}');`;
    });
    console.log(accountnumber);


    let formattedQueriesCOA = nameArray.map((name, index) => {
        return `INSERT INTO chart_of_accounts ( BranchCode, HeadCode, AccountCode, Account, ChequeName, CurrencyCode, CurrencyCurrentRate, Amount, OpeningAmount, Type, AccountType, FSFNote, InActive, Status, GUID, RecordNo, DiscountAccount) 
        VALUES( '${branchCode.value}', '01-002-004', '01-002-004-${(accountnumber + index).toString().padStart(4, '0')}', '${nameArray[index]}', '', 'NULL', '0.00', '0', '0.00', 'H', 'Assets', 0, 1, '1', 0,0,0);`
    });

    // Join all the queries with a newline character for output
    finalQuery = formattedQueries.join("\n");

    // Join all the queries with a newline character for output
    finalCOAQuery = formattedQueriesCOA.join("\n");
    console.log(finalCOAQuery);
    //SHOW COUNT OF NO OF ROWS
    for (let i = 1; i <= formattedQueries.length; i++) {
        numberQuery = i;
        numberofrows.textContent = "ROWS:" + numberQuery;
    }

    // Output validation and displaying the query
    if (names.value === "" && address.value === "" && phone.value === "") {
        output.textContent = "Please Paste Name, Address, and Phone!";
    } else if (names.value === "" && address.value !== "" && phone.value === "") {
        output.textContent = "Please Paste Name and Phone!";
    } else if (names.value === "" && address.value === "" && phone.value !== "") {
        output.textContent = "Please Paste Name and Address!";
    } else if (names.value === "" && address.value !== "" && phone.value !== "") {
        output.textContent = "Please Paste Name!";
    } else if (names.value !== "" && address.value === "" && phone.value === "") {
        output.textContent = "Please Paste Address and Phone!";
    } else if (names.value !== "" && address.value === "" && phone.value !== "") {
        output.textContent = "Please Paste Address!";
    } else if (names.value !== "" && address.value !== "" && phone.value === "") {
        output.textContent = "Please Paste Phone!";
    } else if (nameArray.length !== addressArray.length || nameArray.length !== phoneArray.length) {
        output.textContent = "The number of Names, Address, and Phone numbers do not match!";
    } else {
        output.textContent = finalQuery; // Display the generated SQL queries
    }
    

    // Clipboard Button validation and displaying
    if (output.innerHTML === "" || 
        output.textContent === "Please Paste Data!" || 
        output.textContent === "Please Paste Name, Address, and Phone!" || 
        output.textContent === "Please Paste Name!" || 
        output.textContent === "Please Paste Address!" || 
        output.textContent === "Please Paste Phone!" || 
        output.textContent === "Please Paste Name and Phone!" || 
        output.textContent === "Please Paste Name and Address!" || 
        output.textContent === "Please Paste Address and Phone!" || 
        output.textContent === "The number of Names, Address, and Phone numbers do not match!") {
    
            showBtn.textContent = ""; // Clear the button text  
            copyBtn.textContent = ""; // Clear the button text
            showBtn.style.padding = "0"; // Hide the button by removing padding
            copyBtn.style.padding = "0"; // Hide the button by removing padding.
            numberofrows.textContent = ""; // Clear the number of rows count

    }
    
    else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
        showBtn.textContent = "Show COA";
        showBtn.style.padding = "6px 8px";
    }
};
let showStatus = 0;
const showButton = () => {
    let toggle = true;  // Flag to track which query to display

    showBtn.addEventListener("click", function () {
        if (toggle) {
            showBtn.innerHTML = "Show Customer Query";
            output.textContent = finalCOAQuery;  // Show COA query
        } else {
            showBtn.innerHTML = "Show COA Query";
            output.textContent = finalQuery;  // Show Final query
        }
        toggle = !toggle;  // Toggle the flag on each click
        copyBtn.innerHTML = "Copy to clipboard";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color  0.3s ease";
    });
};

const copyToClip = () => {
    copyBtn.addEventListener("click", function () {
        if (output.innerHTML != "") {
            navigator.clipboard.writeText(output.innerHTML).then(() => {
                copyBtn.innerHTML = "Copied to clipboard!";
                copyBtn.style.backgroundColor = "#45a049";
            });
        };
    });
};


function resetCopyButton() {
    showBtn.textContent = ""; // Clear the button text  
    copyBtn.textContent = ""; // Clear the button text
    showBtn.style.padding = "0"; // Hide the button by removing padding
    copyBtn.style.padding = "0"; // Hide the button by removing padding
    output.textContent = ""; // Clear the output content
    numberofrows.textContent = ""; // Clear the number of rows count
}
updateInactiveBtn.addEventListener("input", resetCopyButton);

copyToClip();
showButton();
