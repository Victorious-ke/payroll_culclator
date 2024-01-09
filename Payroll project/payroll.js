let form=document.getElementById("my_form");

form.addEventListener("submit",function(e){
  e.preventDefault()

  let basic_salary =document.getElementById("basic_salary").value;
  let benefits =document.getElementById("benefits").value;

  if (basic_salary.length==0 && benefits.length==0){
    document.getElementById("error").innerHTML= "fill all fields"
  }
  else{
    let gross_salary=Number(basic_salary)+Number(benefits)
    document.getElementById("gross_salary").innerHTML=gross_salary

    // nssf
    let nssf=0
    if (gross_salary <= 18000) {
      nssf = gross_salary * 0.06;
    } else {
      nssf = 18000 * 0.06;
    }
    document.getElementById("nssf").innerHTML=nssf

    // nhdf
    let nhdf=gross_salary*0.015
      document.getElementById("nhdf").innerHTML=nhdf

      // taxable income
      let taxable_income=gross_salary-(nssf+nhdf)
      document.getElementById("taxable_income").innerHTML=taxable_income

      // relief
      let relief=2400
      document.getElementById("relief").innerHTML=relief

      //payee
      let payee=0
      if(taxable_income>0 && taxable_income<=24000){
        payee= relief
      }else if(taxable_income>24000 && taxable_income<=32333){
        payee=(((taxable_income-24000)*0.25)+(24000*0.1)-relief)
      }else{
        payee=((((taxable_income-32333)*0.30)+(24000*0.1)+(8333*0.25))-relief)
      }
      document.getElementById("payee").innerHTML=payee

      //nhif
      let nhif=0
      if (gross_salary <= 5999) {
        nhif = 150;
      } else if (gross_salary > 5999 && gross_salary <= 7999) {
        nhif = 300;
      } else if (gross_salary > 7999 && gross_salary <= 11999) {
        nhif = 400;
      } else if (gross_salary > 11999 && gross_salary <= 14999) {
        nhif = 500;
      } else if (gross_salary > 14999 && gross_salary <= 19999) {
        nhif = 600;
      } else if (gross_salary > 19999 && gross_salary <= 24999) {
        nhif = 750;
      } else if (gross_salary > 24999 && gross_salary <= 29999) {
        nhif = 850;
      } else if (gross_salary > 29999 && gross_salary <= 34999) {
        nhif = 900;
      } else if (gross_salary > 34999 && gross_salary <= 39999) {
        nhif = 950;
      } else if (gross_salary > 39999 && gross_salary <= 44999) {
        nhif = 1000;
      } else if (gross_salary > 44999 && gross_salary <= 49999) {
        nhif = 1100;
      } else if (gross_salary > 49999 && gross_salary <= 59999) {
        nhif = 1200;
      } else if (gross_salary > 59999 && gross_salary <= 69999) {
        nhif = 1300;
      } else if (gross_salary > 69999 && gross_salary <= 79999) {
        nhif = 1400;
      } else if (gross_salary > 79999 && gross_salary <= 89999) {
        nhif = 1500;
      } else if (gross_salary > 89999 && gross_salary <= 99999) {
        nhif = 1600;
      } else {
        nhif = 1700;
      }
      document.getElementById("nhif").innerHTML=nhif

      //net pay
      let net_pay=taxable_income-((nhif+payee)-relief)
      document.getElementById("net_pay").innerHTML=net_pay
  }

})