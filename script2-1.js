let submitbtn = document.querySelector("#submit");
let inputFeild = document.querySelector(".inputFeild");
let output = document.querySelector(".result");
let feildsHeading = document.querySelector(".headingInputSection1");
let tableName = document.querySelector("#tableName");
let branchCode = document.querySelector("#branchCode");
let inputsection1 = document.querySelector(".inputsection1")
let inputBarcodes = "";
let quoteBarcode = "";
let selectQueryOption = document.querySelector("#selectQuery");
let headingInputSection2 = document.querySelector(".headingInputSection2");
let inputsection2 = document.querySelector(".inputsection2");
let copyBtn = document.getElementById("copyBtn");
let showBtn = document.getElementById("showBtn");
let showbtnContainer = document.querySelector(".showbtnContainer")
let showVhBtn = document.getElementById("showVhBtn");
let numberofrows = document.querySelector(".noofrows");
let numberQuery = 0;
let secondQuery = "";
let firstQuery = "";
let currentDate = new Date();
let formatDate = '';
let voucher_details = "";

selectQueryOption.addEventListener("change", function () {
    if (selectQueryOption.value === "update-SaleRate") {
        inputFeild.innerHTML = `
            <div class="headingInputSection1">
               <h2>Table Name</h2>
           </div>
            <div class="inputsection1">
               <input type = 'text' placeholder = 'tableName' id = 'tableName' value = 'items'>
            </div>
            <div class="headingInputSection2">
                <h2>BARCODES:</h2>
                <h2>SALE_RATE:</h2>
            </div>
            <div class="inputsection2">
                <textarea class='barcodeBox' placeholder='Paste Barcodes here...' wrap='soft'></textarea>
                <textarea class='saleRateBox' placeholder='Paste Sales here...' wrap='soft'></textarea>
            </div>
            <input type="submit" id="submit">
        `;
        gsap.from(".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2", {
            x: -25,
            delay: 0.05,
            duration: 0.4,
            opacity: 0,
            stagger: 0.05
        });

        // Reassign event listener after the DOM update
        document.getElementById("submit").addEventListener("click", function () {
            SalerateUpdateQuery();
        });
    }

    else if (selectQueryOption.value === "insertCustomer") {
        inputFeild.innerHTML = `
            <div class="headingInputSection1">
                <h2>Table Name:</h2>
                <h2>Branch Code:</h2>
                <h2>Account Code:</h2>
            </div>
            <div class="inputsection1">
                <input type='text' placeholder='tableName' id='tableName' value='customers'>
                <input type='text' placeholder='Branch Code' id='branchCode' value='0001'>
                <input type='text' placeholder='AccountCode' id='AccountCode' value='0002'>
            </div>
            <div class="headingInputSection2">
                <h2>NAME:</h2>
                <h2>ADDRESS:</h2>
                <h2>PHONE:</h2>
            </div>
            <div class="inputsection2">
               <textarea class='nameBox' placeholder='Paste Name here...' wrap='soft'></textarea>
               <textarea class='addressBox' placeholder='Paste Address here...' wrap='soft'></textarea>
               <textarea class='phoneBox' placeholder='Paste Phone Here..' wrap='soft'></textarea>
            </div>  
            <input type="submit" id="submit">
        `;

        gsap.from(".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2", {
            x: -25,
            delay: 0.05,
            duration: 0.4,
            opacity: 0,
            stagger: 0.05
        });

        // Reassign event listener after the DOM update
        document.getElementById("submit").addEventListener("click", function () {
            customerInsertQuery();
        });
    }

    else if (selectQueryOption.value === "update-SKU") {
        inputFeild.innerHTML = `
            <div class="headingInputSection1">
                <h2>Table Name:</h2>
            </div>
            <div class="inputsection1">
                <input type='text' placeholder='tableName' id='tableName' value='items'>
            </div>
            <div class="headingInputSection2">
                <h2>BARCODES:</h2>
                <h2>SKU:</h2>
            </div>
            <div class="inputsection2">
                <textarea class='barcodeBox' placeholder='Paste Barcodes here...' wrap='soft'></textarea>
                <textarea class='skuBox' placeholder='Paste SKU here...' wrap='soft'></textarea>
            </div>
            <input type="submit" id="submit">
        `;

        gsap.from(".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2", {
            x: -25,
            delay: 0.05,
            duration: 0.4,
            opacity: 0,
            stagger: 0.05
        });

        // Reassign event listener after the DOM update
        document.getElementById("submit").addEventListener("click", function () {
            skuUpdateQuery();
        });
    }

    else if (selectQueryOption.value === "InsertGRN") {
        inputFeild.innerHTML = `
            <div class="headingInputSection1">
                <h2>Supplier Code:</h2>
                <h2>Supplier Account</h2>
            </div>
            <div class="inputsection1">
                <input type="text" placeholder="Supplier Code" id="SupplierCode" value="Supplier">
                <input type="text" placeholder="Supplier Account" id="suppAcc" value="02-002-001-0001">
            </div>
            <div class="headingInputSection1">
                <h2>GRN No:</h2>
                <h2>GRN DATE:</h2>
            </div>
            <div class="inputsection1">
                <input type="text" placeholder="GRN NO:" id="grnNo" value="0001/Ad">
                <input type="date" id="grnDate" placeholder="dd-mm-yyyy" value="">
                </div>
            <div class="headingInputSection1">
                <h2>Voucher No:</h2>
                <h2>Branch Code:</h2>
            </div>
            <div class="inputsection1">
                <input type="text" placeholder="Voucher No:" id="voucherNo" value="120120241">
                <input type="number" placeholder="Branch Code" id="branchCode" value="0001">
                </div>    
            <div class="headingInputSection2">
                <h2>BARCODE:</h2>
                <h2>UNIT CODE:</h2>
                <h2>QUANTITY:</h2>
                <h2>PUR RATE:</h2>
            </div>
            <div class="inputsection2">
                <textarea class="barcodeBox" placeholder="Paste Barcode here..." wrap="soft"></textarea>
                <textarea class="unitCodeBox" placeholder="Paste Unit Code here..." wrap="soft"></textarea>
                <textarea class="QtyBox" placeholder="Paste Quantity here..." wrap="soft"></textarea>
                <textarea class="purRateBox" placeholder="Paste Purchase Rate here..." wrap="soft"></textarea>
            </div>
            <input type="submit" id="submit">
        `;

        gsap.from(".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2", {
            x: -25,
            delay: 0.05,
            duration: 0.4,
            opacity: 0,
            stagger: 0.05
        });

        // Reassign event listener after the DOM update
        document.getElementById("submit").addEventListener("click", function () {
            grnInsertQuery();
        });

        // formating GRN Date

        let inputDate = document.getElementById('grnDate');

        inputDate.addEventListener('click', function () {
            inputDate.showPicker();
            inputDate.addEventListener('change', function () {
                let selectedDate = new Date(inputDate.value); // Convert to Date object
                formatDate = selectedDate.toLocaleDateString('sv-SE');
                console.log(formatDate)
            });
        });
    }

    // formate GRN DATE

    // KALLE TU BATA DIO TU
    else {
        inputFeild.innerHTML = "";
        output.innerHTML = "";
        // inputsection1.innerHTML = ""
        // headingInputSection2.innerHTML = "";
        // inputsection2.innerHTML = "";
        // feildsHeading.innerHTML = "";
    }

});

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
    firstQuery = formattedQueries.join("\n");

    for (let i = 1; i <= formattedQueries.length; i++) {
        numberQuery = i;
        numberofrows.textContent = "ROWS:" + numberQuery;
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
        output.textContent = firstQuery; // Display the generated SQL queries
    }
    // Clipboard Button validation and displaying
    if (output.innerHTML === "" || output.textContent === "Please Paste Data!"
        || output.textContent === "Please Paste Sale Rate!" || output.textContent === "Please Paste Barcode!" ||
        output.textContent === "The number of Barcodes and Sale Rates do not match!") {
    }

    else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
    };
    console.log(firstQuery)
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
    firstQuery = formattedQueries.join("\n");

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
        output.textContent = firstQuery; // Display the generated SQL queries
    }
    // Clipboard Button validation and displaying
    if (output.innerHTML === "" || output.textContent === "Please Paste Data!"
        || output.textContent === "Please Paste SKU!" || output.textContent === "Please Paste Barcode!" ||
        output.textContent === "The number of Barcodes and SKU do not match!") {
    }

    else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
    };
};

//FOR CUSTOMER INSERT QUERY
function customerInsertQuery() {
    let names = document.querySelector(".nameBox");
    let nameArray = names.value.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes
    let address = document.querySelector(".addressBox");
    let addressArray = address.value.split(/\n/).map(addr => addr.trim().replace(/'/g, '')); // Split and trim sale rates

    let phone = document.querySelector(".phoneBox");
    let phoneArray = phone.value.split(/\n/).map(mobile => mobile.trim().replace(/'/g, '')); // Split and trim phone

    let accountdigit = document.querySelector("#AccountCode").value;
    let accountnumber = Number(accountdigit);

    // Ensure that empty lines are filtered out
    nameArray = nameArray.filter(name => name !== "");
    // addressArray = addressArray.filter(address => address !== "");
    // phoneArray = phoneArray.filter(phone => phone !== "");


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
        return `INSERT INTO ${tableName.value}(BranchCode, CustomerCode, Customer, Address, AreaCode, CityCode, PhoneNo, FaxNo, MobileNo, EmailID, GUID, RecordNo, created_at, updated_at, AreaId, DOB, gender, customer_category, AccountCode)
        VALUES ('${branchCode.value}','0101-${(accountnumber + index).toString().padStart(2, '0')}-0202','${nameArray[index]}','${addressArray[index]}','','','${phoneArray[index]}','','${phoneArray[index]}','',0,0,'${currentDate.toISOString().split('T')[0]} 00:00:00','${currentDate.toISOString().split('T')[0]} 00:00:00','0','0000-00-00 00:00:00','','','01-002-004-${(accountnumber + index).toString().padStart(4, '0')}');`
    });

    let formattedQueriesCOA = nameArray.map((name, index) => {
        return `INSERT INTO chart_of_accounts (BranchCode, HeadCode, AccountCode, Account, ChequeName, CurrencyCode, CurrencyCurrentRate, Amount, OpeningAmount, Type, AccountType, FSFNote, InActive, Status, GUID, RecordNo, DiscountAccount)
        VALUES ('${branchCode.value}','01-002-004','01-002-004-${(accountnumber + index).toString().padStart(4, '0')}','${nameArray[index]}','','NULL','0.00','0','0.00','H','Assets',0,1,'1',0,0,0);`;
    });


    // Join all the queries with a newline character for output
    firstQuery = formattedQueries.join("\n");

    // Join all the queries with a newline character for output
    secondQuery = formattedQueriesCOA.join("\n");

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
    } else if (nameArray.length !== addressArray.length && nameArray.length !== phoneArray.length) {
        output.textContent = "The No of Address and Phone do not match with Names";
    } else if (nameArray.length == phoneArray.length && nameArray.length !== addressArray.length) {
        output.textContent = "The No of Address do not match with Names";
    } else if ((nameArray.length == addressArray.length && nameArray.length !== phoneArray.length)) {
        output.textContent = "The No of phone do not match with Names";
    }
    else {
        output.textContent = firstQuery; // Display the generated SQL queries
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
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
    }
    showButton();
};

function grnInsertQuery() {
    let barcodes = document.querySelector(".barcodeBox");
    let barcodesrray = barcodes.value.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes
    let blankBarcodes = barcodesrray.some(value => value === ""); // Check for blank barcodes

    let unitCode = document.querySelector(".unitCodeBox");
    let unitCodeArray = unitCode.value.split(/\n/).map(unit => unit.trim().replace(/'/g, '')); // Split and trim Unit Code
    let blankunitCode = unitCodeArray.some(value => value === ""); // Check for blank unit codes

    let qty = document.querySelector(".QtyBox");
    let qtyArray = qty.value.split(/\n/).map(qty => qty.trim().replace(/'/g, '')); // Split and trim Quantity
    let blankqty = qtyArray.some(value => value === ""); // Check for blank quantities

    let puRate = document.querySelector(".purRateBox");
    let puRateArray = puRate.value.split(/\n/).map(rate => rate.trim().replace(/'/g, '')); // Split and trim Purchase Rate
    let blankpuRate = puRateArray.some(value => value === ""); // Check for blank purchase rates

    let voucherNo = document.querySelector("#voucherNo");
    let supplierAcc = document.querySelector("#suppAcc");




    // Ensure that empty lines are filtered out
    // barcodesrray = barcodesrray.filter(barcode => barcode !== "");
    // unitCodeArray = unitCodeArray.filter(unit => unit !== "");
    // qtyArray = qtyArray.filter(qty => qty !== "");
    // puRateArray = puRateArray.filter(rate => rate !== "");

    // Ensure tableName is provided
    let SupplierCode = document.querySelector("#SupplierCode");
    if (SupplierCode.value.trim() === "") {
        output.textContent = "Please provide a Supplier Code!";
        return;
    }

    // Ensure branchcode is provided
    let branchCode = document.querySelector("#branchCode");
    if (branchCode.value.trim() === "") {
        output.textContent = "Please provide a Brnach Code!";
        return;
    }


    // Ensure GRN NO is provided
    let grnNo = document.querySelector("#grnNo");
    if (grnNo.value.trim() === "") {
        output.textContent = "Please provide a GRN No!";
        return;
    }

    // Ensure GRN Date is provided
    let grnDate = document.querySelector("#grnDate");
    if (grnDate.value.trim() === "") {
        output.textContent = "Please provide a GRN Date!";
        return;
    }
    // Create separate 'UPDATE' queries for each customer pair
    let detail_inv_transactions = barcodesrray.map((barcode, index) => {
        return `INSERT INTO detail_inv_transactions 
        (id, BranchCode, TransactionNo, Nature, PurchaseOrderNo, BarCode, UnitCode, po_quantity, Quantity, BonusQuantity, DemandQuantity, VarianceQty, RetailRate, NetRate, GrossRate, Rate, PurAvgRate, DiscountP, Discount, SalesTaxP, SalesTax, AdditionalDiscountOnGrossP, AdditionalDiscountOnGross, AdditionalDiscountOnAmountP, AdditionalDiscountOnAmount, FocGSTP, FocGST, Remarks, RecordNo, trDatetime, ExpiryDate, BatchNo, AlternateQty, AlternateRate, brcode_trno_nature, created_at, updated_at)
         VALUES (NULL, '${branchCode.value}', '00022/6St', '1', '', '${barcodesrray[index]}', '${unitCodeArray[index]}', '0.000', '${qtyArray}', '0.000', '0.000', '0.000', '0.000', '3400.0000', '0.0000', '${puRateArray}', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.000', '0.000', '0.000', '0.000', '0.000', '0.000', '', '0', '${currentDate.toISOString().split('T')[0]} 00:00:00', '0000-00-00 00:00:00', '', '0.00', '0.00', '', '${currentDate.toISOString().split('T')[0]} 00:00:00', '${currentDate.toISOString().split('T')[0]} 00:00:00');`;
    });

    let master_inv_transactions = barcodesrray.map((name, index) => {
        return `INSERT INTO master_inv_transactions 
         (id, BranchCode, TransactionNo, InvoiceNo, Nature, RefVoucherNo, PartyInvNo, TransactionDate, GatePassNo, BranchSupplierCode, AccountCode, BookAccountCode, DiscountAccountCode, ItemDiscountAccountCode, SalesTaxAccountCode, ItemSTAccountCode, ItemAdditionalDiscountAccountCode, ItemFocGSTAccountCode, Description, DocumentReference, GrossAmount, DiscountP, Discount, SalesTaxP, SalesTax, NetAmount, UserId, IRSNoRef, PurchaserCode, IsSalesBasis, trDateTime, GUID, RecordNo, brcode_trno_nature, ICRefNo, created_at, updated_at, location_code, terms, dept_code, IsApproved) 
        VALUES (NULL, '${branchCode.value}', '00022/6St', '', '1', '${voucherNo.value}', '', '${formatDate} 00:00:00', '', '00001', '02-002-001-0001', '05-001-001-0001', '', '', '', '', '', '', '', '', '6800.00', '0.00', '0.00', '0.00', '0.00', '6800.00', '', '', '', '0', '${currentDate.toLocaleDateString('fr-CA')}00:00:00', '0', '0', '', '', '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', '0', NULL, NULL, '1');`
    });

    let Amount = 0;
    let total = puRateArray.map((amount, index) => {
        return amount * qtyArray[index]
    });

    total.forEach(element => {
        Amount += element
    });

    console.log("Amount", total)
    console.log("Total Amount", Amount)

voucher_details =
 `
INSERT INTO voucher_details
(id, BranchCode, VoucherTypeCode, VoucherNo, AccountCode, CostCenterCode, CurrencyCode, CurrencyCurrentRate, Amount, Debit, Credit, ChequeNo, ChequeDate, BillRefNo, BillRefRemarks, Remarks, Description, RecordNo, DebitFC, CreditFC, deleted_at, created_at, updated_at, dumycheque, ChequeName, Costcentre_id)
VALUES(727481, '${branchCode.value}', 'GRN', '${voucherNo.value}', '${supplierAcc.value}', '0', '0', 0.00, ${Amount}, 0.0000, ${Amount}, '', '0000-00-00 00:00:00', '${grnNo.value}', NULL, 'Goods Receive Note Voucher , ${formatDate} , ${grnNo.value}', '', '0', 0.0000, 0.0000, NULL, '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', NULL, NULL, 0);
`

voucher_masters =
`
INSERT INTO voucher_masters
(id, BranchCode, VoucherTypeCode, VoucherNo, VoucherDate, Narration, BillRefNo, CreditDays, GUID, RecordNo, deleted_at, created_at, updated_at, IsSaleVoucher, created_by, ChequeName, VoucherStatus)
VALUES(251191, '${branchCode.value}', 'GRN', '${voucherNo.value}', '${formatDate} 00:00:00', 'Goods Receive Note Voucher , ${formatDate} , ${grnNo.value}', '${grnNo.value}', '0', '0', '0', NULL, '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', '${currentDate.toLocaleDateString('fr-CA')} 00:00:00', 1, '46', NULL, 0);
`


    // Join all the queries with a newline character for output
    firstQuery = detail_inv_transactions.join("\n");

    // Join all the queries with a newline character for output
    secondQuery = master_inv_transactions.join("\n");

    //SHOW COUNT OF NO OF ROWS
    for (let i = 1; i <= detail_inv_transactions.length; i++) {
        numberQuery = i;
        numberofrows.textContent = "ROWS:" + numberQuery;
    }

    // Output validation and displaying the query
    if (barcodes.value === "" && unitCode.value === "" && qty.value === "" && puRate.value === "") {
        output.textContent = "Please Paste Barcodes, Unit Code, Quantity, and Purchase Rate!";
    } else if (barcodes.value === "" && unitCode.value !== "" && qty.value === "" && puRate.value === "") {
        output.textContent = "Please Paste Barcodes, Quantity, and Purchase Rate!";
    } else if (barcodes.value === "" && unitCode.value === "" && qty.value !== "" && puRate.value === "") {
        output.textContent = "Please Paste Barcodes, Unit Code, and Purchase Rate!";
    } else if (barcodes.value === "" && unitCode.value === "" && qty.value === "" && puRate.value !== "") {
        output.textContent = "Please Paste Barcodes, Unit Code, and Quantity!";
    } else if (barcodes.value !== "" && unitCode.value === "" && qty.value === "" && puRate.value === "") {
        output.textContent = "Please Paste Unit Code, Quantity, and Purchase Rate!";
    } else if (barcodes.value !== "" && unitCode.value !== "" && qty.value === "" && puRate.value === "") {
        output.textContent = "Please Paste Quantity and Purchase Rate!";
    } else if (barcodes.value !== "" && unitCode.value === "" && qty.value !== "" && puRate.value === "") {
        output.textContent = "Please Paste Unit Code and Purchase Rate!";
    } else if (barcodes.value !== "" && unitCode.value === "" && qty.value === "" && puRate.value !== "") {
        output.textContent = "Please Paste Unit Code and Quantity!";
    } else if (barcodes.value !== "" && unitCode.value !== "" && qty.value !== "" && puRate.value === "") {
        output.textContent = "Please Paste Purchase Rate!";
    } else if (barcodes.value !== "" && unitCode.value !== "" && qty.value === "" && puRate.value !== "") {
        output.textContent = "Please Paste Quantity!";
    } else if (barcodes.value === "" && unitCode.value !== "" && qty.value !== "" && puRate.value !== "") {
        output.textContent = "Please Paste Barcodes!";
    }
    // Check for blank lines in each variable
    else if (blankBarcodes === true) {
        output.textContent = "Remove blank barcode line!";
    } else if (blankunitCode === true) {
        output.textContent = "Remove blank unit code line!";
    } else if (blankqty === true) {
        output.textContent = "Remove blank quantity line!";
    } else if (blankpuRate === true) {
        output.textContent = "Remove blank purchase rate line!";
    }
    // Check for mismatched lengths between barcodes and other arrays
    else if (barcodesrray.length !== unitCodeArray.length) {
        output.textContent = "The number of Barcodes and Unit Codes do not match!";
    } else if (barcodesrray.length !== qtyArray.length) {
        output.textContent = "The number of Barcodes and Quantities do not match!";
    } else if (barcodesrray.length !== puRateArray.length) {
        output.textContent = "The number of Barcodes and Purchase Rates do not match!";
    } else {
        output.textContent = firstQuery; // Display the generated SQL queries
    }


    // Copy/Show Button validation and displaying
    if (output.innerHTML === "" ||
        output.textContent === "Please Paste Barcodes, Unit Code, Quantity, and Purchase Rate!" ||
        output.textContent === "Please Paste Barcodes, Quantity, and Purchase Rate!" ||
        output.textContent === "Please Paste Barcodes, Unit Code, and Purchase Rate!" ||
        output.textContent === "Please Paste Barcodes, Unit Code, and Quantity!" ||
        output.textContent === "Please Paste Unit Code, Quantity, and Purchase Rate!" ||
        output.textContent === "Please Paste Quantity and Purchase Rate!" ||
        output.textContent === "Please Paste Unit Code and Purchase Rate!" ||
        output.textContent === "Please Paste Unit Code and Quantity!" ||
        output.textContent === "Please Paste Purchase Rate!" ||
        output.textContent === "Please Paste Quantity!" ||
        output.textContent === "Please Paste Barcodes!" ||
        output.textContent === "Remove blank barcode line!" ||
        output.textContent === "Remove blank unit code line!" ||
        output.textContent === "Remove blank quantity line!" ||
        output.textContent === "Remove blank purchase rate line!" ||
        output.textContent === "The number of Barcodes and Unit Codes do not match!" ||
        output.textContent === "The number of Barcodes and Quantities do not match!" ||
        output.textContent === "The number of Barcodes and Purchase Rates do not match!") {

        showBtn.textContent = ""; // Clear the button text  
        copyBtn.textContent = ""; // Clear the button text
        showBtn.style.padding = "0"; // Hide the button by removing padding
        copyBtn.style.padding = "0"; // Hide the button by removing padding
        numberofrows.textContent = ""; // Clear the number of rows count

    } else {
        copyBtn.textContent = "Copy to clipboard";
        copyBtn.style.padding = "6px 8px";
        showBtn.textContent = "Show Master Query";
        showBtn.style.padding = "6px 8px";
        showVhBtn.textContent = "Show Voucher Master Query";
        showVhBtn.style.padding = "6px 8px";
        showVhBtn.style.padding = "6px 8px";
        showVhBtn.style.marginTop = "8px";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
    }

    showButton();

};

let showButton = () => {
    let toggle = true;  // Flag to track which query to display on button click
    showVhBtn.addEventListener("click", function () {
        if (toggle) {
            showVhBtn.innerHTML = "Show Voucher Details Query";
            output.textContent = voucher_masters;  // Show COA query
            showBtn.innerHTML = "Show Details Query";

        } else if (!toggle) {
            showVhBtn.innerHTML = "Show Voucher Master Query";
            output.textContent = voucher_details;
        }
      
        toggle = !toggle;  // Toggle the flag on each click
        copyBtn.innerHTML = "Copy to clipboard";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
        console.log(toggle)
    });

    showBtn.addEventListener("click", function () {
        if (selectQueryOption.value === "insertCustomer") {
            if (toggle) {
                showBtn.innerHTML = "Show Customer Query";
                output.textContent = secondQuery;  // Show COA query
            } else {
                showBtn.innerHTML = "Show COA Query";
                output.textContent = firstQuery;  // Show Final query
            }
        } else if (selectQueryOption.value === "InsertGRN") {
            if (toggle) {
                showBtn.innerHTML = "Show Details Query";
                output.textContent = secondQuery;  // Show COA query
            }else {
                showBtn.innerHTML = "Show Master Query";
                output.textContent = firstQuery;  // Show Final query
                showVhBtn.innerHTML = "Show Voucher Master Query";
            }
        }
        toggle = !toggle;  // Toggle the flag on each click
        copyBtn.innerHTML = "Copy to clipboard";
        copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
        copyBtn.style.transition = "background-color 0.3s ease";
        console.log(toggle)
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
selectQueryOption.addEventListener("input", resetCopyButton);

copyToClip();