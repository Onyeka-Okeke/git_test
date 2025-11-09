function loadContactPage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  contentDiv.appendChild(heading);

  const info = document.createElement("p");
  info.textContent =
    "We’re always happy to connect with our guests. Reach out through any of the following:";
  contentDiv.appendChild(info);

  const contactList = document.createElement("ul");
  contactList.classList.add("contact-list");

  const contacts = [
    { label: "Address", value: "123 Culinary Street, Lagos" },
    { label: "Phone", value: "+234 800 123 4567" },
    { label: "Email", value: "info@delicieux.com" },
    { label: "Open Hours", value: "Mon–Sun: 10am – 10pm" },
  ];

  contacts.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
    contactList.appendChild(li);
  });

  contentDiv.appendChild(contactList);
}

export default loadContactPage;
