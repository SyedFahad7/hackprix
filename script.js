document.addEventListener("DOMContentLoaded", function() {
  // Get all faq-question elements
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Add click event listener to each faq-question
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');

      // Get the answer element within the faq-item
      const answer = faqItem.querySelector('.faq-answer');

      // Toggle the display of the answer
      if (answer.style.display === 'block' || getComputedStyle(answer).display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

  const highlightedEmails = document.querySelectorAll('.highlighted-email');

  highlightedEmails.forEach(function(email) {
    email.addEventListener('click', function() {
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Calculate the time difference between now and June 8, 2024, 8:00 AM
const targetDate = new Date(2024, 5, 8, 8, 0, 0); // June 8th, 2024, 8:00 AM

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  // Check if the target date has passed
  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.querySelector('.clock-days .val').textContent = 0;
    document.querySelector('.clock-hours .val').textContent = 0;
    document.querySelector('.clock-minutes .val').textContent = 0;
    document.querySelector('.clock-seconds .val').textContent = 0;
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector('.clock-days .val').textContent = days;
  document.querySelector('.clock-hours .val').textContent = hours;
  document.querySelector('.clock-minutes .val').textContent = minutes;
  document.querySelector('.clock-seconds .val').textContent = seconds;
}, 1000);

// Final countdown initialization
$('.countdown').final_countdown({
  start: '1362139200',
  end: '1388461320',
  now: '1387461319',
  selectors: {
    value_seconds: '.clock-seconds .val',
    canvas_seconds: 'canvas_seconds',
    value_minutes: '.clock-minutes .val',
    canvas_minutes: 'canvas_minutes',
    value_hours: '.clock-hours .val',
    canvas_hours: 'canvas_hours',
    value_days: '.clock-days .val',
    canvas_days: 'canvas_days'
  },
  seconds: {
    borderColor: '#7995D5',
    borderWidth: '6'
  },
  minutes: {
    borderColor: '#ACC742',
    borderWidth: '6'
  },
  hours: {
    borderColor: '#ECEFCB',
    borderWidth: '6'
  },
  days: {
    borderColor: '#FF9900',
    borderWidth: '6'
  }
}, function() {
  // Finish callback
});
});
const generatePDF = async (name) => {
  const { PDFDocument, rgb } = await PDFLib;
  const exBytes = await fetch("./pdfs/cert.pdf").then(res => {
      return res.arrayBuffer()
  });

  const exFont = await fetch("./fonts/poppins/Poppins-Medium.ttf").then(res => { 
      return res.arrayBuffer() 
  });
  const pdfDoc = await PDFDocument.load(exBytes);

  pdfDoc.registerFontkit(fontkit); 
  const myFont = await pdfDoc.embedFont(exFont);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  firstPage.drawText(name, {
      x: 192,
      y: 264,
      size: 34,
      font: myFont,
      color: rgb(1, 1, 1),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
saveAs(uri, `Hackprix ${name}.pdf`, { autoBom: true })
  console.log(exBytes)
 // document.querySelector("#certificate").src = uri;

}

const optionsArray = ["Chinmayee Yasaswini",
  "Deekshith Alugubelli",
  "Diya Gour",
  "Mohammed Fahad Nawaz Khan",
  "Mohammed Muzzammil Uddin",
  "Mohd Muqeet",
  "Sai Neeraj",
  "Samad Yaqoob",
  "Shaik Ilyas",
  "Shaik Irfan",
  "Shouraim Ahmed",
  "Tauquir Alam",
  "Gaurav Verma",
  "Narendra Rathore",
  "Prabhat Potdar",
  "Amatul Wadood",
  "Amina Mirza",
  "Anas Basheer",
  "mohammed ali",
  "Pavani Chindala",
  "Prathyusha Yekamba",
  "Faizan Ahmed",
  "Md Hameeduddin",
  "Tameem Alam",
  "Yahya Khan",
  "Adnan Syed",
  "MohammedMujtaba Ahmed.",
  "Murtuza Hashmi",
  "Syed Rehman",
  "Archana Hublikar",
  "GURUKIRAN P",
  "harshika harsha",
  "Sathish S",
  "Mohammed Huzaifah",
  "Mohammed Shameem Sarwar",
  "Shah Hussain",
  "Syed numaan",
  "ankith Deegoju",
  "Dharanidhara Tammina",
  "Shaik Yousuf",
  "Abdul Farhath Mohammad",
  "Anirudh Rakonda",
  "Siddhartha Goud",
  "Ahbar Ali",
  "Md Mustafa",
  "MD Nafees",
  "MDFARHAN KHAN",
  "Gokulpriyan Karthikeyan",
  "Jeyadeepak U R",
  "Mohamed Arbaaz",
  "Kavyasree Polamreddy",
  "Manasa Tellapati",
  "Sivasree Thupalli",
  "Bharath Peddi",
  "Chandra Sekhar",
  "Ganesh Putta",
  "Jaswanth Pillella",
  "Abdul Mannan",
  "Isfar Mohiuddin",
  "Jibran Iqbal",
  "JOHN ABRAHAM",
  "Pranay Chaitanya",
  "vijay varma",
  "Vinesh Naini",
  "Abdullah Shaikh",
  "Ans Khan",
  "Nabeel Shareef",
  "Shaik Addeeb",
  "Hitesh Kukreja",
  "Mehvish Sheikh",
  "Sahaji Chaurasia",
  "Abdul Aziz",
  "Ibad Sajid",
  "Mohammed Anas",
  "Syed Muzammil",
  "Hanshith Chandragiri",
  "Himaja Sayari",
  "Nidhitha Thangallapally",
  "Rithvika Keerthi",
  "Mohammed Muqsith Ali Khan",
  "Rashid Mahmood",
  "Arham Khan",
  "Mohammed Azaan",
  "Mohd Jawwad",
  "Anil Kumar",
  "Lakshmi Aturu",
  "Rahul Pillanagrovi",
  "Thupalli Yuvasree",
  "Ihsan Shaik",
  "Sidra Aleem",
  "Syeda Zoya",
  "bharath k",
  "Dhurkesh B",
  "GOKUL KANISHK",
  "KARTHIKEYAN T",
  "Asma Khanam",
  "Mohamed Vaiz",
  "Mohammed Ameer",
  "Syed Tajuddin",
  "Abdur farooqui",
  "Mohammed Faisal Parvez",
  "Mohammed Ghouse",
  "Mohammed-Riyan Nazeer",
  "KUMKUM GEHLOT",
  "Ramachandra Bharadwaj",
  "Saloni Sharma",
  "Somanath Nayak",
  "Bhanuprasad Chunchu",
  "Soumya Dwivedi",
  "Sreedwep Sharma",
  "Abdul Muqtadir",
  "Muqtadir Quadri",
  "Sumaiya Fathima",
  "Syed Imaaz Ali",
  "Adeeba Farooq",
  "Ayaan Khan",
  "Sania Mohammadi",
  "Thaizia Shaikh",
  "Salma Sanubar",
  "Sameera Begum",
  "Tarannum Afreen",
  "Zeenath Kousar",
  "Abdul Rahman Abdul Raheem Mohammed",
  "Mohammed Abdul Raheem",
  "Mohammed Adil",
  "Abrar Sharif",
  "Asfaan Hussain",
  "Mohammed AbdulJunaid",
  "Kelvin Patel",
  "Kothaharsh Vardhan",
  "Sharath Chandra",
  "biradar poonam",
  "Ch. Karuna Jyothi",
  "Laya Reddy",
  "Praneeth Dindigala",
  "Soumik Kondadi",
  "Teesa Reddy",
  "Anviksha Pallati",
  "NagaRaj Neelam",
  "Nissi Bandi",
  "Rithwik Chimmani",
  "Grandhi Praveen",
  "Nagarapu Sandeep",
  "Nandakishor Gopalapuram",
  "Praveen vadlamudi",
  "Burugu Sainitin",
  "mekarthi thanusri",
  "panga arun",
  "B.THARUN REDDY",
  "Irrinki Harsha",
  "Sridhar Kalidindi",
  "Aarav Kumar",
  "Bhuvnesh Richhariya",
  "JayJagdish Kar",
  "Prathmesh Pednekar",
  "Akhila Rachakonda",
  "Hanshitha Cherla",
  "Nathan Busi",
  "Yashasvini DONDULA",
  "Shaik Mastan Vali",
  "Shoeb Mohiuddin",
  "Suleman Msu",
  "Mohd Moiz Uddin Ahmed",
  "Rizwan Ali",
  "Sohaib Samad",
  "Ankitha Joshi",
  "K G SHREYA .",
  "Neerav V Patel",
  "Reshna Nandipi",
  "Mohammed Hasnain",
  "Mohammed Mudassir",
  "Mohammed Abdul Farhan",
  "Mohammed Afraaz Ahmed",
  "Mohammed Raahil Ahmed",
  "Arham Farooq",
  "Mohammed Tauseef Ahmed",
  "Sai Devansh Sai Devansh",
  "Shaistha Aara",
  "ABID MAJID",
  "AFFAN KHAN",
  "Moazzam Mohiuddin",
  "Mohammed Shareef",
  "AmmarAzam Ibrahimi",
  "Mohammed Samee Ullah Khan",
  "Mohammedfaisal Jahangir",
  "Ishaq Ahmed",
  "Mohd Azeem",
  "Sufiyan Mehmood",
  "USMAN KHAN",
  "Anjali Kumari",
  "Mohammed Abdul Haseeb",
  "Mohammed Kaif",
  "Syed Akram",
  "Mohammed Faisal",
  "Mohammed Saif",
  "Talha Hussain",
  "Yameenullah Zain",
  "Ibrahim Khaleel",
  "sujay Pathri",
  "Bhargav Pattanayak",
  "Praneeth Ayla",
  "Saurabh Kumar",
  "Mohammed Naserdastagir",
  "Zaid Uddin",
  "Mohammed Ehteshamul Baqui",
  "Nouman Ajmal Khan",
  "Mohammad Akmal",
  "Sohail Shah",
  "SYED AHMED",
  "Syed Naveed",
  "MABHUSUBHANI SHAIK",
  "Sindhuja Gopu",
  "Madhuri Eampati",
  "Rupa Samala",
  "SaiVivek Dokudu",
  "Vishal Arya Dacha",
  "Md Himayath Ali",
  "Mohammed Muqtadir",
  "Mudassir Uddin",
  "SHAIK ABRAR",
  "Dudekula Sohel",
  "Shaik Kaleem",
  "Aqdas Ahmed",
  "Kalam Khan",
  "Maryam Mateen",
  "Mohammed Mubashiruddin",
  "Manoj Reddy",
  "sai charan",
  "sai shashank",
  "Sainath S",
  "Sharath Chandra Chinnarigari",
  "Chakradhar Amingad",
  "Joel Thaduri",
  "morathoti rahul",
  "Sanjana Aravind",
  "ABDUL RAZZAK",
  "ANAS FARHAN",
  "MD JAVEED_KHAN",
  "Ahmedqudsi GhouseAlikhan",
  "Mohammed Waseemuddin",
  "Mohd Amaan",
  "Omar Kaiser",
  "AKASH PENTALA",
  "K.Ajay Goud",
  "Madugula Likhith",
  "ROHITH NAIDU",
  "Abhishek Lodhi",
  "Indal Lodhi",
  "Raj lodhi",
  "Alvira _",
  "RAFEIA MAHEEN",
  "Aavula Anusha",
  "BHUKYA GEETHIKA",
  "Satya Reddy",
  "Rugved Wankhade",
  "Sheldon Chettiar",
  "Abdul Taha",
  "Jawad Mohd",
  "Mohammed Arsalaan",
  "Roshan Zameer",
  "Dheeraj Reddy",
  "Sanjay Agamamidi",
  "Sirichandan Anumandla",
  "Sudeep Gudipalli",
  "Abdul Rahman",
  "Mahmood Ali",
  "Muzmmmil Ather",
  "Syed Muheed",
  "Nishant Tiwari",
  "Shiwansh Tiwari",
  "AKHIL MAHESWARAM",
  "Kiran alex Challagiri",
  "kunal idnani",
  "Asritha Indira Palchuru",
  "Naresh C",
  "Ankit Bhad",
  "Aryan Khokle",
  "Girija Chachada",
  "Kunika Bhutada",
  "Md MuqeetAli",
  "Mohammed Shafian Ali Khan",
  "Mohd Abuzar",
  "Rushikesh Ponnala",
  "SadhaShiva Aeshala",
  "Saipavan Middela",
  "Srikarnivas Yerra",
  "Ankita Rolla",
  "Kumaran S",
  "sarthak Rath",
  "Varsha .",
  "Aravind Pulluri",
  "Sneha Uppula",
  "Tejashwini Pilli",
  "Affan Asif",
  "Ibraheem Farooq",
  "Masood Sharief",
  "Shafaq Hussain",
  "charan reddy",
  "PremSai Kota",
  "Shivamani Gali",
  "Srinivas Gogula",
  "Mohammed Ismail",
  "S ADITHIYA",
  "Sayyad Shakil",
  "Swayam Tiwari",
  "Insiya Maryam",
  "Maria Ashfaq",
  "Nameera Nousheen",
  "Saniya Arshad",
  "Mohammad Vahaj ur Rahman",
  "Mohammed Musab Umayr",
  "Nahid Sami",
  "Syed Omer Shah",
  "Aabhash sinha",
  "Aditya Kaushik",
  "Hrishi Rathore",
  "Vineet Pandey",
  "Ausaf Nouman",
  "Maryam Asad",
  "Syed Humaid",
  "ZOYA Ali",
  "Bilal Hussain",
  "Danish Mohiuddin",
  "Uzair Khan",
  "N Raghuveer",
  "Sai Tejaswini",
  "sandeepkumarreddy Tavva",
  "k sanath",
  "P NISHANT",
  "S.chandrakanth Reddy",
  "YERUKALA RAMAKRISHNA",
  "Chaitanya Gatreddi",
  "Manvitha Maddula",
  "Keerthi Boga",
  "Pramod Kumar",
  "Vigneshwar SametiThirumani",
  "Charan Voore",
  "E.Y.S.V.S ABHAY",
  "Rishitha Rumandla",
  "Shravya Bojja",
  "FARDEEN KHAN",
  "Mohamed Yaser",
  "MOHD KHIZER",
  "Ahmed Bahattab",
  "Mohammad Uzaafar",
  "Nawaz Ahmed",
  "SyedHameed Uddin",
  "Dhanush NarasimhaRao",
  "mani chandra",
  "md yaseen",
  "Rajagiri Likhitha",
  "A Chandra Kishan Singha",
  "Mahima Yadav",
  "Shahir Bilagi",
  "Velupugonda BhavaniKrishna",
  "Vikhyath Rai",
  "Yash Shetty",
  "Balakrishna Veldi",
  "Hemanth Kumar",
  "NIRUPREDDY MARAMREDDY",
  "Pasupula Muralidhar",
  "JADAV KESHAV",
  "Mohammed AbdurRasheed",
  "MONISH BALANI",
  "Rohith Singh",
  "KAMALESH D",
  "Monishraj H",
  "Kotha Murali Krishna",
  "Neeraj Karatmal",
  "Sai Ram Naraboina",
  "Varun Kumar Gajjala",
  "Aneesh Sai",
  "Hemanth Mudivarti",
  "Syeda Bareerah",
  "Zobia Sultana",
"Shubhnagi Gupta",
"Aashi Gupta",
"Freya Jain"];



// Get the dropdown content container
const dropdownContent = document.getElementById("myDropdown");
//const btn = document.getElementById("button");
username = "test";

const buttonn = document.querySelector("#button1");



// Populate options dynamically
optionsArray.forEach((optionText) => {
  const optionElement = document.createElement("a");
  optionElement.textContent = optionText;
  optionElement.href = "javascript:void(0)"; // Prevent default behavior
  dropdownContent.appendChild(optionElement);
});


// Event listener for option selection
dropdownContent.addEventListener("click", (event) => {
if (event.target.tagName === "A") {
const selectedOption = event.target.textContent;
document.getElementsByClassName("namebtn")[0].textContent = selectedOption;
username = selectedOption;
console.log(`Selected option: ${username}`);
// Use the selectedOption as needed (e.g., pass it to a function)
}

});

buttonn.addEventListener("click", () => {
  if (username === "test") {
    alert("Please select your name");
  } else {
    // Show the modal since a name has been selected
    const modal = document.getElementById("myModal");
    const closeModal = modal.querySelector(".close");

    modal.style.display = "block";

    // Close the modal when the user clicks on the close button
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    generatePDF(username);
  }
});


// Filter function for search
function filterFunction() {
const input = document.getElementById("myInput");
const filter = input.value.toUpperCase();
const options = dropdownContent.getElementsByTagName("a");

for (let i = 0; i < options.length; i++) {
const optionText = options[i].textContent || options[i].innerText;
if (optionText.toUpperCase().includes(filter)) {
  options[i].style.display = "block";
} else {
  options[i].style.display = "none";
}
}
}
function downloadPDF() {
  var pdfUrl = "pdfs/HackPrix_Sponsor_Deck.pdf";

  var anchor = document.createElement('a');

  anchor.setAttribute('href', pdfUrl);

  anchor.setAttribute('download', '');

  anchor.click();
}


document.querySelector('.scroll-arrow-left').addEventListener('click', () => {
  document.querySelector('.tracks-container').scrollBy({
    left: -window.innerWidth,
    behavior: 'smooth'
  });
});

document.querySelector('.scroll-arrow-right').addEventListener('click', () => {
  document.querySelector('.tracks-container').scrollBy({
    left: window.innerWidth,
    behavior: 'smooth'
  });
});

// Get the animated text and dots
const animatedText = document.getElementById("animated-text");
const dots = document.querySelectorAll(".dot");

console.log(animatedText); // Check if animatedText is not null
console.log(dots); // Check if dots is not empty

// Function to fade in the dots infinitely
function animateDots() {
  dots.forEach((dot) => {
    dot.style.animation = "fadeInOut 2s infinite";
  });
}

// Call the function to start dot animation
animateDots();
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const dropdownContent = document.getElementById('dropdownContent');
  
  if (!menuButton || !dropdownContent) {
    console.error('Menu button or dropdown content not found.');
    return;
  }

  menuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', function() {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  });

  dropdownContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
// Add loading class to body to show loader
document.body.classList.add('loading');

setTimeout(function() {
    document.getElementById('loader-container').style.display = 'none';
    document.body.classList.remove('loading'); // Remove loading class
}, Math.random() * (4000 - 3000) + 2000);

document.addEventListener('DOMContentLoaded', function() {
  const scheduleContainer = document.querySelector('.schedule-container');
  const leftArrow = document.querySelector('#schedule .scroll-arrow-left');
  const rightArrow = document.querySelector('#schedule .scroll-arrow-right');

  if (leftArrow && rightArrow && scheduleContainer) {
    leftArrow.addEventListener('click', function() {
      scheduleContainer.scrollBy({
        left: -scheduleContainer.clientWidth,
        behavior: 'smooth'
      });
    });

    rightArrow.addEventListener('click', function() {
      scheduleContainer.scrollBy({
        left: scheduleContainer.clientWidth,
        behavior: 'smooth'
      });
    });
  } else {
    console.error("Elements not found", { leftArrow, rightArrow, scheduleContainer });
  } 
});



