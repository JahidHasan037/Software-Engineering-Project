
        // Sample Data for Students
        const students = [
            { id: "20CSE001", password: "pass12345", name: "MD.Al Amin Hossain", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75},
            { id: "20CSE002", password: "pass12345", name: "MD.Sihab Uddin", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE003", password: "pass12345", name: "Zahid Al Mahmud", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE004", password: "pass12345", name: "Amir Hamza Anik", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE005", password: "pass12345", name: "Hasanujjaman Himu", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE007", password: "pass12345", name: "MA.Forhad Aziz", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE008", password: "pass12345", name: "Afreen Zahan", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE010", password: "pass12345", name: "Mohammad Nimour Hossain", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE011", password: "pass12345", name: "Masum", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE014", password: "pass12345", name: "Arnob", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE015", password: "pass12345", name: "Jahidul Islam", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE016", password: "pass12345", name: "Bondhon Dasgupto", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE018", password: "pass12345", name: "Sayem Uddin Musa", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE019", password: "pass12345", name: "Minhajul Abedin Kollol", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE020", password: "pass12345", name: "Al amin", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE022", password: "pass12345", name: "Yeasin Arafat", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE023", password: "pass12345", name: "Ujjol Hira", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE024", password: "pass12345", name: "Utpol Mohanto", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE025", password: "pass12345", name: "Akash SHeikh", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE026", password: "pass12345", name: "Al Imran", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE028", password: "pass12345", name: "Jubayer Hossain", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE029", password: "pass12345", name: "Anamul Hoque", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE031", password: "pass12345", name: "Abdullah AL Loman", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE032", password: "pass12345", name: "Asad", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE033", password: "pass12345", name: "Shahadat Hossain", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE034", password: "pass12345", name: "Ismail Hossain", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE035", password: "pass12345", name: "Habibullah Jilani", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE036", password: "pass12345", name: "Iftekhar siddiq Tanvir", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE037", password: "pass12345", name: "Jahid Hasan", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE038", password: "pass12345", name: "Atahar Hossain Sohag", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
            { id: "20CSE039", password: "pass12345", name: "Minhaj Reza", department: "CSE", creditsCompleted: 96, creditsRemaining: 24, cgpa: 3.75 },
            { id: "20CSE007", password: "pass12345", name: "Mahfuz Hasan", department: "CSE", creditsCompleted: 88, creditsRemaining: 32, cgpa: 3.60 },
            { id: "20CSE050", password: "pass12345", name: "Maniq Gaji", department: "CSE", creditsCompleted: 100, creditsRemaining: 20, cgpa: 3.85 },
        ];

        // Login Function
        function login() {
            const studentId = document.getElementById("studentId").value;
            const password = document.getElementById("password").value;
            const student = students.find(stu => stu.id === studentId && stu.password === password);

            if (student) {
                // Hide Login Form and Show Student Info
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("studentInfo").style.display = "block";

                // Populate Student Info
                document.getElementById("name").textContent = student.name;
                document.getElementById("id").textContent = student.id;
                document.getElementById("department").textContent = student.department;
                document.getElementById("creditsCompleted").textContent = student.creditsCompleted;
                document.getElementById("creditsRemaining").textContent = student.creditsRemaining;
                document.getElementById("cgpa").textContent = student.cgpa;
            } else {
                alert("Invalid Student ID or Password!");
            }
        }
   