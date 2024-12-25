let submitbtn = document.querySelector("#submit");
let inputFeild = document.querySelector(".inputFeild");
let output = document.querySelector(".result");
let feildsHeading = document.querySelector(".headingInputSection1");
let tableName = document.querySelector("#tableName");
let branchCode = document.querySelector("#branchCode");
let inputsection1 = document.querySelector(".inputsection1");
let inputBarcodes = "";
let quoteBarcode = "";
let selectQueryOption = document.querySelector("#selectQuery");
let headingInputSection2 = document.querySelector(".headingInputSection2");
let inputsection2 = document.querySelector(".inputsection2");
let copyBtn = document.getElementById("copyBtn");
let showBtn = document.getElementById("showBtn");
let showbtnContainer = document.querySelector(".showbtnContainer");
let showVhBtn = document.getElementById("showVhBtn");
let numberofrows = document.querySelector(".noofrows");
let numberQuery = 0;
let master_inv_transactions = "";
let detail_inv_transactions = "";
let currentDate = new Date();
let formatDate = "";
let voucher_details = "";
let voucher_masters = "";
let newColumnArray = null;

selectQueryOption.addEventListener("change", function () {
  // if (selectQueryOption.value === "update-SaleRate") {
  //     inputFeild.innerHTML = `
  //         <div class="headingInputSection1">
  //            <h2>Table Name</h2>
  //        </div>
  //         <div class="inputsection1">
  //            <input type = 'text' placeholder = 'tableName' id = 'tableName' value = 'items'>
  //         </div>
  //         <div class="headingInputSection2">
  //             <h2>BARCODES:</h2>
  //             <h2>SALE_RATE:</h2>
  //         </div>
  //         <div class="inputsection2">
  //             <textarea class='barcodeBox' placeholder='Paste Barcodes here...' wrap='soft'></textarea>
  //             <textarea class='saleRateBox' placeholder='Paste Sales here...' wrap='soft'></textarea>
  //         </div>
  //         <input type="submit" id="submit">
  //     `;
  //     gsap.from(".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2", {
  //         x: -25,
  //         delay: 0.05,
  //         duration: 0.4,
  //         opacity: 0,
  //         stagger: 0.05
  //     });

  //     // Reassign event listener after the DOM update
  //     document.getElementById("submit").addEventListener("click", function () {
  //         SalerateUpdateQuery();
  //     });

  // }
  if (selectQueryOption.value === "insertCustomer") {
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

    gsap.from(
      ".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2",
      {
        x: -25,
        delay: 0.05,
        duration: 0.4,
        opacity: 0,
        stagger: 0.05,
      }
    );

    // Reassign event listener after the DOM update
    document.getElementById("submit").addEventListener("click", function () {
      customerInsertQuery();
    });
  } else if (selectQueryOption.value === "Update") {
    inputFeild.innerHTML = `
                        <div class="headingInputSection1">
                            <h2>Table Name:</h2>
                        </div>
                        <div class="inputsection1">
                            <input type='text' placeholder='tableName' id='tableName' value='items'>
                        </div>
                        <div class="inputContainer2">
                            <div class="inputGroup2">
                                <div class="headingInputSection2">
                                    <h2 id="barcodedit" value="BARCODES:">BARCODES</h2>
                                </div>
                                <div class="inputsection2">
                                    <textarea
                                        class="barcodeBox"
                                        placeholder="Paste Barcodes here..."
                                        wrap="soft"
                                    ></textarea>
                                </div>
                            </div>
            
                            <div class="inputGroup2">
                                <div class="headingInputSection2">
                                    <h2 id="skuedit" value="SKU:">SKU</h2>
                                </div>
                                <div class="inputsection2">
                                    <textarea
                                        class="skuBox"
                                        placeholder="Paste SKU here..."
                                        wrap="soft"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="addMoreInputDiv">
                                <button id="addMoreInputBtn">+</button>
                            </div>
                          </div>
                            
                            
                            <div class="popup">
                              <input id="name" type="text" placeholder="Column Name" required>
                              <button id="addColumnBtn">✔</button>
                            </div>
                            
                            <input type="submit" id="submit">
                        </div>
                    </div>
                </div>
            </div>
        `;

    gsap.from(
      ".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2",
      {
        x: -25,
        delay: 0.05,
        duration: 0.4,
        opacity: 0,
        stagger: 0.05,
      }
    );
    // make barcode heading editable feild
    let editabletext = document.querySelectorAll("span");

    editabletext.forEach((text) => {
      text.contentEditable = "false";
      text.style.fontSize = "0.9em"; // Slightly smaller than main text
      text.style.color = "#666"; // Gray color
      text.style.fontStyle = "italic"; // Italic for emphasis
    });

    let headings = document.querySelectorAll("h2");
    //Make Column heading Editable
    headings.forEach((heading) => {
      heading.addEventListener("dblclick", () => {
        if (heading.textContent === "Table Name:") return;
        heading.contentEditable = "true";
        heading.style.textTransform = "none";
        heading.focus();

        // Function to handle click outside
        function handleClickOutside(event) {
          if (!heading.contains(event.target)) {
            heading.contentEditable = "false"; // Disable editing
            heading.value = heading.textContent;

            // Remove the event listener uuonce clicked outside
            document.removeEventListener("mousedown", handleClickOutside);
          }
        }

        // Add the event listener to detect clicks outside
        document.addEventListener("mousedown", handleClickOutside);
      });
    });

    const AddFeildsBtn = document.querySelector("#addMoreInputBtn");
    const popup = document.querySelector(".popup");
    const ColumnContainer = document.querySelector(".inputContainer2");
    const addColumnBtn = document.querySelector("#addColumnBtn");
    const columnNameInput = document.querySelector("#name");
    const plusButton = document.querySelector(".addMoreInputDiv");
    console.log(columnNameInput);

    // Update the position of the popup when the screen is resized
    function updateElementPosition() {
      const rect = AddFeildsBtn.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
      popup.style.left = `${rect.left + window.scrollX + 10}px`;
    }

    window.addEventListener("resize", updateElementPosition);

    // Hide the popup when clicking outside
    window.addEventListener("click", (event) => {
      if (!popup.contains(event.target) && event.target !== AddFeildsBtn) {
        popup.style.display = "none";
      }
    });

    let AdditionalColumnAdded = false;
    // Show the popup when clicking the plus button
    AddFeildsBtn.addEventListener("click", (event) => {
      if (!AdditionalColumnAdded) {
        popup.style.display = "flex";
        updateElementPosition(); // Ensure the popup is positioned correctly
      }
      else{
        alert("You can only add one column at a time");
      }
    });

    // When New column is added
    addColumnBtn.addEventListener("click", () => {
      if (columnNameInput.value === "") {
        return;
      }
      let newColumn = document.createElement("div");
      newColumn.className = "inputGroup2";
      newColumn.innerHTML = `
      <div class="headingInputSection2">
        <h2 contenteditable="true" id="${columnNameInput.value}">${columnNameInput.value}</h2>
      </div>
      <div class="inputsection2">
        <textarea class="newColumn" placeholder="Paste ${columnNameInput.value} here..." wrap="soft"></textarea>
      </div>
      `;
      let newColumnElement = newColumn.querySelector(".newColumn");
      newColumnArray = newColumnElement;
      ColumnContainer.appendChild(newColumn);
      ColumnContainer.insertBefore(newColumn, plusButton);
      AdditionalColumnAdded = true;
      popup.style.display = "none";
    });

    // Reassign event listener after the DOM update
    document.getElementById("submit").addEventListener("click", function () {
      Update();
    });
  } else if (selectQueryOption.value === "InsertGRN") {
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

    gsap.from(
      ".headingInputSection1, .inputsection1, .headingInputSection2, .inputsection2",
      {
        x: -25,
        delay: 0.05,
        duration: 0.4,
        opacity: 0,
        stagger: 0.05,
      }
    );

    // Reassign event listener after the DOM update
    document.getElementById("submit").addEventListener("click", function () {
      grnInsertQuery();
    });

    // formating GRN Date

    let inputDate = document.getElementById("grnDate");

    inputDate.addEventListener("click", function () {
      inputDate.showPicker();
      inputDate.addEventListener("change", function () {
        let selectedDate = new Date(inputDate.value); // Convert to Date object
        formatDate = selectedDate.toLocaleDateString("sv-SE");
        console.log(formatDate);
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

//FOR UPDATE QUERY
// function SalerateUpdateQuery() {
//     let barcodes = document.querySelector(".barcodeBox");
//     let valueBarcodes = barcodes.value.trim(); // Remove extra spaces
//     let barcodesArray = valueBarcodes.split(/\n/).map(barcode => barcode.trim()); // Split and trim barcodes

//     let saleRate = document.querySelector(".saleRateBox");
//     let valueSaleRate = saleRate.value.trim(); // Remove extra spaces
//     let saleRateArray = valueSaleRate.split(/\n/).map(rate => rate.trim()); // Split and trim sale rates

//     // Ensure that empty lines are filtered out
//     barcodesArray = barcodesArray.filter(barcode => barcode !== "");
//     saleRateArray = saleRateArray.filter(rate => rate !== "");

//     // Ensure tableName is provided
//     let tableName = document.querySelector("#tableName");
//     if (tableName.value.trim() === "") {
//         output.textContent = "Please provide a table name!";
//         return;
//     }

//     // Create separate 'UPDATE' queries for each barcode-saleRate pair
//     let formattedQueries = barcodesArray.map((barcode, index) => {
//         return `UPDATE ${tableName.value} SET sale_rate = ${saleRateArray[index]} WHERE barcode = '${barcode}';`;
//     });

//     // Join all the queries with a newline character for output
//     firstQuery = formattedQueries.join("\n");

//     for (let i = 1; i <= formattedQueries.length; i++) {
//         numberQuery = i;
//         numberofrows.textContent = "ROWS:" + numberQuery;
//     }

//     // Output validation and displaying the query
//     if (valueBarcodes === "" && valueSaleRate === "") {
//         output.textContent = "Please Paste Data!";
//     } else if (valueBarcodes !== "" && valueSaleRate === "") {
//         output.textContent = "Please Paste Sale Rate!";
//     } else if (valueBarcodes === "" && valueSaleRate !== "") {
//         output.textContent = "Please Paste Barcode!";
//         // Handle case where the number of barcodes and sale rates do not match
//     } else if (barcodesArray.length !== saleRateArray.length) {
//         output.textContent = "The number of Barcodes and Sale Rates do not match!";
//     } else {
//         output.textContent = firstQuery; // Display the generated SQL queries
//     }
//     // Clipboard Button validation and displaying
//     if (output.innerHTML === "" || output.textContent === "Please Paste Data!"
//         || output.textContent === "Please Paste Sale Rate!" || output.textContent === "Please Paste Barcode!" ||
//         output.textContent === "The number of Barcodes and Sale Rates do not match!") {
//     }

//     else {
//         copyBtn.textContent = "Copy to clipboard";
//         copyBtn.style.padding = "6px 8px";
//         copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
//         copyBtn.style.transition = "background-color 0.3s ease";
//     };
//     console.log(firstQuery)
// };

//FOR SALE RATE UPDATE QUERY
function Update() {
  let barcodes = document.querySelector(".barcodeBox");
  let valueBarcodes = barcodes.value.trim(); // Remove extra spaces
  let barcodesArray = valueBarcodes
    .split(/\n/)
    .map((barcode) => barcode.trim()); // Split and trim barcodes

  let sku = document.querySelector(".skuBox");
  let valuesku = sku.value.trim(); // Remove extra spaces
  let skuArray = valuesku.split(/\n/).map((rate) => rate.trim()); // Split and trim sale rates

  let skuHeading = document.querySelector("#skuedit");
  let barcodeHeading = document.querySelector("#barcodedit");

  if (newColumnArray !== null) {
    let newColumnValues = newColumnArray.value.trim(); // Remove extra spaces
    var NewValuesArray = newColumnValues
      .split(/\n/)
      .map((barcode) => barcode.trim()); // Split and trim barcodes
  } else {
    var NewValuesArray = [];
  }

  // Ensure that empty lines are filtered out
  barcodesArray = barcodesArray.filter((barcode) => barcode !== "");
  skuArray = skuArray.filter((rate) => rate !== "");
  NewValuesArray = NewValuesArray.filter((val) => val !== "");

  // Ensure tableName is provided
  let tableName = document.querySelector("#tableName");
  if (tableName.value.trim() === "") {
    output.textContent = "Please provide a table name!";
    return;
  }

  // Create separate 'UPDATE' queries for each barcode-saleRate pair
  let formattedQueries;
  if (newColumnArray !== null) {
    formattedQueries = barcodesArray.map((barcode, index) => {
      return `UPDATE ${tableName.value} SET ${
        skuHeading.childNodes[0].textContent || "sku"
      } = '${skuArray[index]}','${NewValuesArray[index]}' WHERE ${
        barcodeHeading.childNodes[0].textContent || "barcode"
      } = '${barcode}';`;
    });
  } else {
    formattedQueries = barcodesArray.map((barcode, index) => {
      return `UPDATE ${tableName.value} SET ${
        skuHeading.childNodes[0].textContent || "sku"
      } = '${skuArray[index]}' WHERE ${
        barcodeHeading.childNodes[0].textContent || "barcode"
      } = '${barcode}';`;
    });
  }

  // Join all the queries with a newline character for output
  firstQuery = formattedQueries.join("\n");
  console.log(firstQuery.trim(" "));

  for (let i = 1; i <= formattedQueries.length; i++) {
    numberQuery = i;
    numberofrows.textContent = "ROWS:" + numberQuery;
  }

  // Output validation and displaying the query
  if (valueBarcodes === "" && valuesku === "") {
    output.textContent = "Please Paste Data!";
    resetCopyButton();
  } else if (valueBarcodes !== "" && valuesku === "") {
    output.textContent = "Please Paste SKU!";
    resetCopyButton();
  } else if (valueBarcodes === "" && valuesku !== "") {
    output.textContent = "Please Paste Barcode!";
    resetCopyButton();
    // Handle case where the number of barcodes and sale rates do not match
  } else if (barcodesArray.length !== skuArray.length) {
    output.textContent = "The number of Barcodes and SKU do not match!";
    resetCopyButton();
  } else {
    output.textContent = firstQuery; // Display the generated SQL queries
    copyBtn.textContent = "Copy to clipboard";
    copyBtn.style.padding = "6px 8px";
    copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
    copyBtn.style.transition = "background-color 0.3s ease";
  }
}

//FOR CUSTOMER INSERT QUERY
function customerInsertQuery() {
  let names = document.querySelector(".nameBox");
  let nameArray = names.value.split(/\n/).map((barcode) => barcode.trim()); // Split and trim barcodes
  let address = document.querySelector(".addressBox");
  let addressArray = address.value
    .split(/\n/)
    .map((addr) => addr.trim().replace(/'/g, "")); // Split and trim sale rates

  let phone = document.querySelector(".phoneBox");
  let phoneArray = phone.value
    .split(/\n/)
    .map((mobile) => mobile.trim().replace(/'/g, "")); // Split and trim phone

  let accountdigit = document.querySelector("#AccountCode").value;
  let accountnumber = Number(accountdigit);

  // Ensure that empty lines are filtered out
  nameArray = nameArray.filter((name) => name !== "");
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
    return `INSERT INTO ${
      tableName.value
    }(BranchCode, CustomerCode, Customer, Address, AreaCode, CityCode, PhoneNo, FaxNo, MobileNo, EmailID, GUID, RecordNo, created_at, updated_at, AreaId, DOB, gender, customer_category, AccountCode)
        VALUES ('${branchCode.value}','0101-${(accountnumber + index)
      .toString()
      .padStart(2, "0")}-0202','${nameArray[index]}','${
      addressArray[index]
    }','','','${phoneArray[index]}','','${phoneArray[index]}','',0,0,'${
      currentDate.toISOString().split("T")[0]
    } 00:00:00','${
      currentDate.toISOString().split("T")[0]
    } 00:00:00','0','0000-00-00 00:00:00','','','01-002-004-${(
      accountnumber + index
    )
      .toString()
      .padStart(4, "0")}');`;
  });

  let formattedQueriesCOA = nameArray.map((name, index) => {
    return `INSERT INTO chart_of_accounts (BranchCode, HeadCode, AccountCode, Account, ChequeName, CurrencyCode, CurrencyCurrentRate, Amount, OpeningAmount, Type, AccountType, FSFNote, InActive, Status, GUID, RecordNo, DiscountAccount)
        VALUES ('${branchCode.value}','01-002-004','01-002-004-${(
      accountnumber + index
    )
      .toString()
      .padStart(4, "0")}','${
      nameArray[index]
    }','','NULL','0.00','0','0.00','H','Assets',0,1,'1',0,0,0);`;
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
    resetCopyButton();
  } else if (names.value === "" && address.value !== "" && phone.value === "") {
    output.textContent = "Please Paste Name and Phone!";
    resetCopyButton();
  } else if (names.value === "" && address.value === "" && phone.value !== "") {
    output.textContent = "Please Paste Name and Address!";
    resetCopyButton();
  } else if (names.value === "" && address.value !== "" && phone.value !== "") {
    output.textContent = "Please Paste Name!";
    resetCopyButton();
  } else if (names.value !== "" && address.value === "" && phone.value === "") {
    output.textContent = "Please Paste Address and Phone!";
    resetCopyButton();
  } else if (names.value !== "" && address.value === "" && phone.value !== "") {
    output.textContent = "Please Paste Address!";
    resetCopyButton();
  } else if (names.value !== "" && address.value !== "" && phone.value === "") {
    output.textContent = "Please Paste Phone!";
    resetCopyButton();
  } else if (
    nameArray.length !== addressArray.length &&
    nameArray.length !== phoneArray.length
  ) {
    output.textContent = "The No of Address and Phone do not match with Names";
    resetCopyButton();
  } else if (
    nameArray.length == phoneArray.length &&
    nameArray.length !== addressArray.length
  ) {
    output.textContent = "The No of Address do not match with Names";
    resetCopyButton();
  } else if (
    nameArray.length == addressArray.length &&
    nameArray.length !== phoneArray.length
  ) {
    output.textContent = "The No of phone do not match with Names";
    resetCopyButton();
  } else {
    output.textContent = firstQuery; // Display the generated SQL queries
    showbtnContainer.innerHTML = `<button class="copyBtn" id="showBtn"></button>`;
    showBtn.style.display = "flex";
    showBtn.textContent = "Show COA";
    showBtn.style.padding = "6px 8px";
    copyBtn.textContent = "Copy to clipboard";
    copyBtn.style.padding = "6px 8px";
    copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
    copyBtn.style.transition = "background-color 0.3s ease";
  }

  let toggle = true;
  showBtn.addEventListener("click", function () {
    if (toggle === true) {
      showBtn.textContent = "Show Customer";
      output.textContent = secondQuery;
      copyBtn.textContent = "Copy to clipboard";
      copyBtn.style.padding = "6px 8px";
      copyBtn.style.backgroundColor = "#BB86FC";
    } else {
      showBtn.textContent = "Show COA";
      output.textContent = firstQuery;
      copyBtn.textContent = "Copy to clipboard";
      copyBtn.style.padding = "6px 8px";
      copyBtn.style.backgroundColor = "#BB86FC";
    }
    console.log(toggle);
    toggle = !toggle;
  });
}

function grnInsertQuery() {
  let barcodes = document.querySelector(".barcodeBox");
  let barcodesrray = barcodes.value
    .split(/\n/)
    .map((barcode) => barcode.trim()); // Split and trim barcodes
  let blankBarcodes = barcodesrray.some((value) => value === ""); // Check for blank barcodes

  let unitCode = document.querySelector(".unitCodeBox");
  let unitCodeArray = unitCode.value
    .split(/\n/)
    .map((unit) => unit.trim().replace(/'/g, "")); // Split and trim Unit Code
  let blankunitCode = unitCodeArray.some((value) => value === ""); // Check for blank unit codes

  let qty = document.querySelector(".QtyBox");
  let qtyArray = qty.value
    .split(/\n/)
    .map((qty) => qty.trim().replace(/'/g, "")); // Split and trim Quantity
  let blankqty = qtyArray.some((value) => value === ""); // Check for blank quantities

  let puRate = document.querySelector(".purRateBox");
  let puRateArray = puRate.value
    .split(/\n/)
    .map((rate) => rate.trim().replace(/'/g, "")); // Split and trim Purchase Rate
  let blankpuRate = puRateArray.some((value) => value === ""); // Check for blank purchase rates

  let voucherNo = document.querySelector("#voucherNo");
  let supplierAcc = document.querySelector("#suppAcc");

  let queryselect = document.querySelector("#queryselect");

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
  let firstQuery = barcodesrray.map((barcode, index) => {
    return `INSERT INTO detail_inv_transactions 
        (id, BranchCode, TransactionNo, Nature, PurchaseOrderNo, BarCode, UnitCode, po_quantity, Quantity, BonusQuantity, DemandQuantity, VarianceQty, RetailRate, NetRate, GrossRate, Rate, PurAvgRate, DiscountP, Discount, SalesTaxP, SalesTax, AdditionalDiscountOnGrossP, AdditionalDiscountOnGross, AdditionalDiscountOnAmountP, AdditionalDiscountOnAmount, FocGSTP, FocGST, Remarks, RecordNo, trDatetime, ExpiryDate, BatchNo, AlternateQty, AlternateRate, brcode_trno_nature, created_at, updated_at)
         VALUES (NULL, '${branchCode.value}', '00022/6St', '1', '', '${
      barcodesrray[index]
    }', '${
      unitCodeArray[index]
    }', '0.000', '${qtyArray}', '0.000', '0.000', '0.000', '0.000', '3400.0000', '0.0000', '${puRateArray}', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.000', '0.000', '0.000', '0.000', '0.000', '0.000', '', '0', '${
      currentDate.toISOString().split("T")[0]
    } 00:00:00', '0000-00-00 00:00:00', '', '0.00', '0.00', '', '${
      currentDate.toISOString().split("T")[0]
    } 00:00:00', '${currentDate.toISOString().split("T")[0]} 00:00:00');`;
  });

  let secondQuery = barcodesrray.map((name, index) => {
    return `INSERT INTO master_inv_transactions 
         (id, BranchCode, TransactionNo, InvoiceNo, Nature, RefVoucherNo, PartyInvNo, TransactionDate, GatePassNo, BranchSupplierCode, AccountCode, BookAccountCode, DiscountAccountCode, ItemDiscountAccountCode, SalesTaxAccountCode, ItemSTAccountCode, ItemAdditionalDiscountAccountCode, ItemFocGSTAccountCode, Description, DocumentReference, GrossAmount, DiscountP, Discount, SalesTaxP, SalesTax, NetAmount, UserId, IRSNoRef, PurchaserCode, IsSalesBasis, trDateTime, GUID, RecordNo, brcode_trno_nature, ICRefNo, created_at, updated_at, location_code, terms, dept_code, IsApproved) 
        VALUES (NULL, '${branchCode.value}', '00022/6St', '', '1', '${
      voucherNo.value
    }', '', '${formatDate} 00:00:00', '', '00001', '02-002-001-0001', '05-001-001-0001', '', '', '', '', '', '', '', '', '6800.00', '0.00', '0.00', '0.00', '0.00', '6800.00', '', '', '', '0', '${currentDate.toLocaleDateString(
      "fr-CA"
    )}00:00:00', '0', '0', '', '', '${currentDate.toLocaleDateString(
      "fr-CA"
    )} 00:00:00', '${currentDate.toLocaleDateString(
      "fr-CA"
    )} 00:00:00', '0', NULL, NULL, '1');`;
  });

  let Amount = 0;
  let total = puRateArray.map((amount, index) => {
    amount * qtyArray[index];
  });

  total.forEach((element) => {
    Amount += element;
  });

  console.log("Amount", total);
  console.log("Total Amount", Amount);

  voucher_details = `
INSERT INTO voucher_details
(id, BranchCode, VoucherTypeCode, VoucherNo, AccountCode, CostCenterCode, CurrencyCode, CurrencyCurrentRate, Amount, Debit, Credit, ChequeNo, ChequeDate, BillRefNo, BillRefRemarks, Remarks, Description, RecordNo, DebitFC, CreditFC, deleted_at, created_at, updated_at, dumycheque, ChequeName, Costcentre_id)
VALUES(727481, '${branchCode.value}', 'GRN', '${voucherNo.value}', '${
    supplierAcc.value
  }', '0', '0', 0.00, ${Amount}, 0.0000, ${Amount}, '', '0000-00-00 00:00:00', '${
    grnNo.value
  }', NULL, 'Goods Receive Note Voucher , ${formatDate} , ${
    grnNo.value
  }', '', '0', 0.0000, 0.0000, NULL, '${currentDate.toLocaleDateString(
    "fr-CA"
  )} 00:00:00', '${currentDate.toLocaleDateString(
    "fr-CA"
  )} 00:00:00', NULL, NULL, 0);
`;

  voucher_masters = `
INSERT INTO voucher_masters
(id, BranchCode, VoucherTypeCode, VoucherNo, VoucherDate, Narration, BillRefNo, CreditDays, GUID, RecordNo, deleted_at, created_at, updated_at, IsSaleVoucher, created_by, ChequeName, VoucherStatus)
VALUES(251191, '${branchCode.value}', 'GRN', '${
    voucherNo.value
  }', '${formatDate} 00:00:00', 'Goods Receive Note Voucher , ${formatDate} , ${
    grnNo.value
  }', '${grnNo.value}', '0', '0', '0', NULL, '${currentDate.toLocaleDateString(
    "fr-CA"
  )} 00:00:00', '${currentDate.toLocaleDateString(
    "fr-CA"
  )} 00:00:00', 1, '46', NULL, 0);
`;

  // Join all the queries with a newline character for output
  detail_inv_transactions = firstQuery.join("\n");

  // Join all the queries with a newline character for output
  master_inv_transactions = secondQuery.join("\n");

  //SHOW COUNT OF NO OF ROWS
  for (let i = 1; i <= firstQuery.length; i++) {
    numberQuery = i;
    numberofrows.textContent = "ROWS:" + numberQuery;
  }
  console.log;
  // Output validation and displaying the query
  if (
    barcodes.value === "" &&
    unitCode.value === "" &&
    qty.value === "" &&
    puRate.value === ""
  ) {
    output.textContent =
      "Please Paste Barcodes, Unit Code, Quantity, and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value === "" &&
    unitCode.value !== "" &&
    qty.value === "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Barcodes, Quantity, and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value === "" &&
    unitCode.value === "" &&
    qty.value !== "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Barcodes, Unit Code, and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value === "" &&
    unitCode.value === "" &&
    qty.value === "" &&
    puRate.value !== ""
  ) {
    output.textContent = "Please Paste Barcodes, Unit Code, and Quantity!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value === "" &&
    qty.value === "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Unit Code, Quantity, and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value !== "" &&
    qty.value === "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Quantity and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value === "" &&
    qty.value !== "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Unit Code and Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value === "" &&
    qty.value === "" &&
    puRate.value !== ""
  ) {
    output.textContent = "Please Paste Unit Code and Quantity!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value !== "" &&
    qty.value !== "" &&
    puRate.value === ""
  ) {
    output.textContent = "Please Paste Purchase Rate!";
    resetCopyButton();
  } else if (
    barcodes.value !== "" &&
    unitCode.value !== "" &&
    qty.value === "" &&
    puRate.value !== ""
  ) {
    output.textContent = "Please Paste Quantity!";
    resetCopyButton();
  } else if (
    barcodes.value === "" &&
    unitCode.value !== "" &&
    qty.value !== "" &&
    puRate.value !== ""
  ) {
    output.textContent = "Please Paste Barcodes!";
    resetCopyButton();
  }
  // Check for blank lines in each variable
  else if (blankBarcodes === true) {
    output.textContent = "Remove blank barcode line!";
    resetCopyButton();
  } else if (blankunitCode === true) {
    output.textContent = "Remove blank unit code line!";
    resetCopyButton();
  } else if (blankqty === true) {
    output.textContent = "Remove blank quantity line!";
    resetCopyButton();
  } else if (blankpuRate === true) {
    output.textContent = "Remove blank purchase rate line!";
    resetCopyButton();
  }
  // Check for mismatched lengths between barcodes and other arrays
  else if (barcodesrray.length !== unitCodeArray.length) {
    output.textContent = "The number of Barcodes and Unit Codes do not match!";
    resetCopyButton();
  } else if (barcodesrray.length !== qtyArray.length) {
    output.textContent = "The number of Barcodes and Quantities do not match!";
    resetCopyButton();
  } else if (barcodesrray.length !== puRateArray.length) {
    output.textContent =
      "The number of Barcodes and Purchase Rates do not match!";
    resetCopyButton();
  } else {
    output.textContent = firstQuery; // Display the generated SQL queries
    showbtnContainer.innerHTML = `
        <select name="variance" id="queryselect">
        <option id="queryoption"value="Inv Detail">Inv Detail</option>
        <option  id="queryoption"value="Inv Master">Inv Master</option>
        <option  id="queryoption"value="Voucher Detail"> Voucher Details </option>
        <option id="queryoption" value="Voucher Master">Voucher Master</option>
        </select>`;
    let queryselect = document.querySelector("#queryselect");
    queryselect.style.fontSize = "11px";
    queryselect.style.padding = "5px 9px 5px 1px";
    showBtn.style.display = "none";
    copyBtn.textContent = "Copy to clipboard";
    copyBtn.style.padding = "6px 8px";
    copyBtn.style.backgroundColor = "#BB86FC"; // Reset to the original color
    copyBtn.style.transition = "background-color 0.3s ease";
  }
}

showbtnContainer.addEventListener("change", function () {
  if (queryselect.value === "Inv Master") {
    output.textContent = master_inv_transactions;
  } else if (queryselect.value === "Inv Detail") {
    output.textContent = detail_inv_transactions;
  } else if (queryselect.value === "Voucher Master") {
    output.textContent = voucher_masters;
  } else if (queryselect.value === "Voucher Detail") {
    output.textContent = voucher_details;
  }
});
const copyToClip = () => {
  copyBtn.addEventListener("click", function () {
    if (output.innerHTML != "") {
      navigator.clipboard.writeText(output.innerHTML).then(() => {
        copyBtn.innerHTML = "Copied to clipboard!";
        copyBtn.style.backgroundColor = "#45a049";
      });
    }
  });
};

function resetCopyButton() {
  showbtnContainer.innerHTML = "";
  numberofrows.textContent = ""; // Clear the number of rows count
  copyBtn.textContent = ""; // Clear the button text
  copyBtn.style.padding = "0"; // Hide the button by removing padding
  showBtn.style.padding = "0"; // Hide the button by removing padding
  showBtn.textContent = ""; // Clear the button text
}
selectQueryOption.addEventListener("input", resetCopyButton);

copyToClip();
