const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  console.log(name.value);
  const emailId = document.getElementById("emailId");
  const telephone = document.getElementById("telephone");
  window.alert(
    `Your details are sucessfully submit with\n Name-${name.value}\n Email=${emailId.value} \n Phone=${telephone.value} \n Please be pateince we will reach you soon😊`
  );
  document.location = "/";
});
