let islem = "ing";

        function Kontrol(event) {
            const number = document.getElementById('loan');
            const percentage = document.getElementById('installment');

            if (number.type !== 'number' || percentage.type !== 'number') {
                alert('Lütfen girdi türlerini değiştirmeyin!');
                event.preventDefault();
                return false;
            }

            calculate();
            event.preventDefault();
        }

        function calculate() {
            const loan = parseFloat(document.getElementById('loan').value.trim());
            const installment = parseFloat(document.getElementById('installment').value.trim());

            if (isNaN(loan) || isNaN(installment)) {
                alert('Lütfen boş yer bırakmayınız');
                return false;
            }

            let sonuc;
            let monthlyPayment;
            switch (islem) {
                case "ing":
                    sonuc = ING(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                case "hscb":
                    sonuc = HSCB(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                case "icbc":
                    sonuc = ICBC(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                case "aexp":
                    sonuc = AmericanExpress(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                case "capital":
                    sonuc = CapitalOne(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                case "qnb":
                    sonuc = QNB(loan, installment);
                    monthlyPayment = calculateMonthlyPayment(sonuc, installment);
                    break;
                default:
                    console.log("ERROR!!!");
                    return;
            }

            document.getElementById('result').innerText = "Your total loan amount: " + sonuc.toFixed(2);
            displayTable(monthlyPayment, installment);
        }

        function handleSelectChange(event) {
            var selectElement = event.target;
            islem = selectElement.value;
        }

        function ING(loan, installment) {
            var result = loan * (1 + (3.69 / 100) * installment);
            return result;
        }

        function HSCB(loan, installment) {
            var result = loan * (1 + (7.50 / 100) * installment);
            return result;
        }

        function ICBC(loan, installment) {
            var result = loan * (1 + (4.25 / 100) * installment);
            return result;
        }

        function AmericanExpress(loan, installment) {
            var result = loan * (1 + (4.25 / 100) * installment);
            return result;
        }

        function CapitalOne(loan, installment) {
            var result = loan * (1 + (4.48 / 100) * installment);
            return result;
        }

        function QNB(loan, installment) {
            var result = loan * (1 + (4.49 / 100) * installment);
            return result;
        }

        function calculateMonthlyPayment(totalLoanAmount, months) {
            return totalLoanAmount / months;
        }

        function displayTable(monthlyPayment, months) {
            let tableContainer = document.getElementById('table-container');
            let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Remaining</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Tax Paid</th>
                        <th>Monthly</th>
                    </tr>
                </thead>
                <tbody>`;

            for (let i = 1; i <= months; i++) {
                let remainingPrincipal = (months - i) * monthlyPayment; 
                let principalPaid = monthlyPayment; 
                let interestPaid = 0.25 * monthlyPayment; 
                let taxPaid = 0.07 * monthlyPayment; 

                tableHTML += `
                <tr>
                    <td>${remainingPrincipal.toFixed(2)} TL</td>
                    <td>${principalPaid.toFixed(2)} TL</td>
                    <td>${interestPaid.toFixed(2)} TL</td>
                    <td>${taxPaid.toFixed(2)} TL</td>
                    <td>${monthlyPayment.toFixed(2)} TL</td>
                </tr>`;
            }

            tableHTML += `
                </tbody>
            </table>`;
            tableContainer.innerHTML = tableHTML;
        }

        