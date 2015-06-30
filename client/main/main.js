(function (angular) {
  "use strict";
  angular.module('stars.main', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('stars.main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'Main.controller'
      });
  })
  .controller('Main.controller', ['$scope', function($scope) {
    var stars = [{
      awarder: "Stewart McCoy",
      recipient: "Liam Dorpalen-Barry",
      src: "../assets/img/standard.png",
      testimonial: "Liam did a great job organizing the technical aspects of the Chegg Stars Hackathon project! Thanks Liam!",
      timeStamp: Date.now(),
    }];

    $scope.stars = stars;

    $scope.submitStar = function() {
      var newStar = {};
      newStar.recipient = $scope.recipient;
      newStar.src = "../assets/img/standard.png";
      newStar.awarder = "Albert Aroeste";
      newStar.testimonial = $scope.starExplanation;
      newStar.timeStamp = Date.now();

      $scope.stars.push(newStar);
    };
  }])
  .factory('Employees', function() {
    var employees = [{name: "Alexander Sludnikov", email: "asludnikov@chegg.com", office: "Israel"}, {name: "Anna Yona", email: "ayona@chegg.com", office: "Israel"}, {name: "Arieh Glazer", email: "arieh@chegg.com", office: "Israel"}, {name: "Aviel Lazar", email: "aviel@chegg.con", office: "Israel"}, {name: "Danny Askarov", email: "daskarov@chegg.com", office: "Israel"}, {name: "Einav Shapira", email: "einav@chegg.com", office: "Israel"}, {name: "Ilan Cohen", email: "ilan@chegg.com", office: "Israel"}, {name: "Imri Marmor", email: "imri@chegg.com", office: "Israel"}, {name: "Micha Burd", email: "micha@chegg.com", office: "Israel"}, {name: "Michael Shabtai", email: "mshabtai@chegg.com", office: "Israel"}, {name: "Rami Baksansky", email: "rami@chegg.com", office: "Israel"}, {name: "Rodik Hanukaev", email: "rodik@chegg.com", office: "Israel"}, {name: "Shahaf Shakuf", email: "sshakuf@chegg.com", office: "Israel"}, {name: "Simon Hanukaev", email: "simonh@chegg.com", office: "Israel"}, {name: "Tomer Shiri", email: "tomer@chegg.com", office: "Israel"}, {name: "Yaara Kass", email: "yaara@chegg.com", office: "Israel"}, {name: "Yanir Cohen", email: "ycohen@chegg.com", office: "Israel"}, {name: "Yehuda Gilead", email: "yehuda@chegg.com", office: "Israel"}, {name: "Aaron Chavolla", email: "achavolla@chegg.com", office: "Kentucky"}, {name: "Aaron Higdon", email: "ahigdon@chegg.com", office: "Kentucky"}, {name: "Billy Noe", email: "bnoe@chegg.com", office: "Kentucky"}, {name: "Brendan Manion", email: "bmanion@chegg.com", office: "Kentucky"}, {name: "Brian Foster", email: "brian@chegg.com", office: "Kentucky"}, {name: "Bryce Mcgrew", email: "bmcgrew@chegg.com", office: "Kentucky"}, {name: "Charles Cox", email: "tcox@chegg.com", office: "Kentucky"}, {name: "Charles Pendleton", email: "charles@chegg.com", office: "Kentucky"}, {name: "Christopher Fox", email: "cfox@chegg.com", office: "Kentucky"}, {name: "Courtney Bolden", email: "cbolden@chegg.com", office: "Kentucky"}, {name: "Courtney Jessie", email: "cjessie@chegg.com", office: "Kentucky"}, {name: "Curtis Harris", email: "curtis@chegg.com", office: "Kentucky"}, {name: "Cynthia Scott", email: "cscott@chegg.com", office: "Kentucky"}, {name: "Eric Williams", email: "ewilliams@chegg.com", office: "Kentucky"}, {name: "Gregory Bowlin", email: "gregory@chegg.com", office: "Kentucky"}, {name: "James Conner", email: "jconner@chegg.com", office: "Kentucky"}, {name: "Jennifer Lovvorn", email: "jlovvorn@chegg.com", office: "Kentucky"}, {name: "Jeremy O'Nan", email: "jonan@chegg.com", office: "Kentucky"}, {name: "Josh Willyard", email: "jwillyard@chegg.com", office: "Kentucky"}, {name: "Kerri Poteat", email: "kpoteat@chegg.com", office: "Kentucky"}, {name: "Martha Marmet", email: "martha@chegg.com", office: "Kentucky"}, {name: "Michael Vergin", email: "mvergin@chegg.com", office: "Kentucky"}, {name: "Patrick Cyrus", email: "pcyrus@chegg.com", office: "Kentucky"}, {name: "Ronaldus Rhodes", email: "rrhodes@chegg.com", office: "Kentucky"}, {name: "Russell Drury", email: "russell@chegg.com", office: "Kentucky"}, {name: "Scottie Marcum", email: "smarcum@chegg.com", office: "Kentucky"}, {name: "Sherjuana Watkins", email: "sherjuana@chegg.com", office: "Kentucky"}, {name: "Stephanie Flischel", email: "sflischel@chegg.com", office: "Kentucky"}, {name: "Tammy Dangerfield", email: "tdangerfield@chegg.com", office: "Kentucky"}, {name: "Teresa Gray", email: "tgray@chegg.com", office: "Kentucky"}, {name: "Timothy Brown", email: "tbrown@chegg.com", office: "Kentucky"}, {name: "William Brendle", email: "william@chegg.com", office: "Kentucky"}, {name: "Ashley Huff", email: "ashley@chegg.com", office: "Portland"}, {name: "Michael Stanley", email: "michael@chegg.com", office: "Portland"}, {name: "Michelle Murff", email: "mmurff@chegg.com", office: "Portland"}, {name: "Ruben Alaniz", email: "ruben@chegg.com", office: "Portland"}, {name: "Shawna Hardy", email: "shardy@chegg.com", office: "Portland"}, {name: "Tara Molina", email: "tara@chegg.com", office: "Portland"}, {name: "April Dewart", email: "april@chegg.com", office: "Remote (CA)"}, {name: "Danielle Johnson", email: "dpeters@chegg.com", office: "Remote (CA)"}, {name: "Gerrit van Zyll", email: "gerrit@chegg.com", office: "Remote (CA)"}, {name: "Joel Ereg", email: "jereg@chegg.com", office: "Remote (CA)"}, {name: "Kristin Merkel", email: "kristin@chegg.com", office: "Remote (CA)"}, {name: "Nancy Houser", email: "nancy@chegg.com", office: "Remote (CA)"}, {name: "Alexis Schwartz", email: "alexis@chegg.com", office: "Remote (Non CA)"}, {name: "Allison Miller", email: "allison@chegg.com", office: "Remote (Non CA)"}, {name: "Andrew Miller", email: "drew@chegg.com", office: "Remote (Non CA)"}, {name: "Augustin Kennady", email: "akennady@chegg.com", office: "Remote (Non CA)"}, {name: "Ben Ryon", email: "bryon@chegg.com", office: "Remote (Non CA)"}, {name: "Brandon Boulter", email: "brandon@chegg.com", office: "Remote (Non CA)"}, {name: "Brian Hassig", email: "tony@chegg.com", office: "Remote (Non CA)"}, {name: "Catherine Clark", email: "cclark@chegg.com", office: "Remote (Non CA)"}, {name: "Chris Barmonde", email: "cbarmonde@chegg.com", office: "Remote (Non CA)"}, {name: "Danielle Malloy", email: "dmalloy@chegg.com", office: "Remote (Non CA)"}, {name: "Edward Blumenthal", email: "ted@chegg.com", office: "Remote (Non CA)"}, {name: "Gil Rogers", email: "gil@chegg.com", office: "Remote (Non CA)"}, {name: "Jeff LaFavor", email: "jlafavor@chegg.com", office: "Remote (Non CA)"}, {name: "Jeffrey Kliegman", email: "jeffk@chegg.com", office: "Remote (Non CA)"}, {name: "Jeremy Matula", email: "jeremy@chegg.com", office: "Remote (Non CA)"}, {name: "Kenneth Roulhac", email: "kenneth@chegg.com", office: "Remote (Non CA)"}, {name: "Kurt Offereins", email: "kurt@chegg.com", office: "Remote (Non CA)"}, {name: "Kyle Scott", email: "kscott@chegg.com", office: "Remote (Non CA)"}, {name: "Lyndenise Berdecia", email: "lyndenise@chegg.com", office: "Remote (Non CA)"}, {name: "Matthew Mulqueen", email: "mmulqueen@chegg.com", office: "Remote (Non CA)"}, {name: "Mitch Spolan", email: "mitch@chegg.com", office: "Remote (Non CA)"}, {name: "Molly Hamlin-James", email: "molly@chegg.com", office: "Remote (Non CA)"}, {name: "Reva Levin", email: "reva@chegg.com", office: "Remote (Non CA)"}, {name: "Seth Kadish", email: "seth@chegg.com", office: "Remote (Non CA)"}, {name: "Stephen Roy", email: "stephen@chegg.com", office: "Remote (Non CA)"}, {name: "Tamara Khaleel", email: "tamara@chegg.com", office: "Remote (Non CA)"}, {name: "Tiffany Stockwell", email: "tiffany@chegg.com", office: "Remote (Non CA)"}, {name: "Timothy Galyean", email: "timg@chegg.com", office: "Remote (Non CA)"}, {name: "Willis Lyon", email: "will@chegg.com", office: "Remote (Non CA)"}, {name: "Yael Klein", email: "yael@chegg.com", office: "Remote (Non CA)"}, {name: "Alan Sheu", email: "alan@chegg.com", office: "San Francisco"}, {name: "Albert Tsai", email: "atsai@chegg.com", office: "San Francisco"}, {name: "Alberto Aroeste", email: "alberto@chegg.com", office: "San Francisco"}, {name: "Alexander Dupre", email: "alex@chegg.com", office: "San Francisco"}, {name: "Alison Johnston", email: "alison@chegg.com", office: "San Francisco"}, {name: "Andrea Poetzsch", email: "andrea@chegg.com", office: "San Francisco"}, {name: "Annlin Sheih", email: "annlin@chegg.com", office: "San Francisco"}, {name: "Bradford Toney", email: "bradford@chegg.com", office: "San Francisco"}, {name: "Caroline Young", email: "caroline@chegg.com", office: "San Francisco"}, {name: "Catherine Brena", email: "kate@chegg.com", office: "San Francisco"}, {name: "Catherine Ye", email: "cathy@chegg.com", office: "San Francisco"}, {name: "Claire Hubbard", email: "claire@chegg.com", office: "San Francisco"}, {name: "Colin Stevenson", email: "cstevenson@chegg.com", office: "San Francisco"}, {name: "Da Suel Kim", email: "nkim@chegg.com", office: "San Francisco"}, {name: "Daniel Johnston", email: "djohnston@chegg.com", office: "San Francisco"}, {name: "David Ngo", email: "dngo@chegg.com", office: "San Francisco"}, {name: "Divyamalthi Gunaseelan", email: "divya@chegg.com", office: "San Francisco"}, {name: "Dmitriy Mazin", email: "dmazin@chegg.com", office: "San Francisco"}, {name: "Doris Lai", email: "doris@chegg.com", office: "San Francisco"}, {name: "Eric Zarowny", email: "ericz@chegg.com", office: "San Francisco"}, {name: "James Farrimond", email: "jay@chegg.com", office: "San Francisco"}, {name: "James Williams", email: "jamesw@chegg.com", office: "San Francisco"}, {name: "Javier Trejo Garcia", email: "jair@chegg.com", office: "San Francisco"}, {name: "Jennifer Wagner", email: "jennifer@chegg.com", office: "San Francisco"}, {name: "Jessica Kirkpatrick", email: "jess@chegg.com", office: "San Francisco"}, {name: "Joseph Shurtleff", email: "joey@chegg.com", office: "San Francisco"}, {name: "Josette Calata", email: "josette@chegg.com", office: "San Francisco"}, {name: "Justin Butler", email: "jbutler@chegg.com", office: "San Francisco"}, {name: "Kenneth Lee", email: "kennethl@chegg.com", office: "San Francisco"}, {name: "Laura Bofill", email: "lbofill@chegg.com", office: "San Francisco"}, {name: "Laura Oppenheimer", email: "laurao@chegg.com", office: "San Francisco"}, {name: "Lauren Pressler", email: "lauren@chegg.com", office: "San Francisco"}, {name: "Liam Dorpalen-Barry", email: "liam@chegg.com", office: "San Francisco"}, {name: "Matthew Chotin", email: "mchotin@chegg.com", office: "San Francisco"}, {name: "Maureen O'Brien", email: "maureen@chegg.com", office: "San Francisco"}, {name: "Moritaka Yagi", email: "mori@chegg.com", office: "San Francisco"}, {name: "Nicholas Burns", email: "nburns@chegg.com", office: "San Francisco"}, {name: "Osei Poku", email: "opoku@chegg.com", office: "San Francisco"}, {name: "Prianna Pathak", email: "prianna@chegg.com", office: "San Francisco"}, {name: "Rob Wellington", email: "rwellington@chegg.com", office: "San Francisco"}, {name: "Sarah Little", email: "sarah@chegg.com", office: "San Francisco"}, {name: "Sean Castillo", email: "scastillo@chegg.com", office: "San Francisco"}, {name: "Seana Mickols", email: "seana@chegg.com", office: "San Francisco"}, {name: "Shannon Coulson", email: "scoulson@chegg.com", office: "San Francisco"}, {name: "Siddhartha Kasivajhula", email: "sid@chegg.com", office: "San Francisco"}, {name: "Sophia Ramatici", email: "sophie@chegg.com", office: "San Francisco"}, {name: "Stewart McCoy", email: "stewart@chegg.com", office: "San Francisco"}, {name: "Syrus Akbary", email: "sakbary@chegg.com", office: "San Francisco"}, {name: "Tomoko Katsumi", email: "katt@chegg.com", office: "San Francisco"}, {name: "Victoria Holliday", email: "victoria@chegg.com", office: "San Francisco"}, {name: "Xiao Xu", email: "xiao@chegg.com", office: "San Francisco"}, {name: "Aaron Pullman", email: "apullman@chegg.com", office: "Santa Clara"}, {name: "Abhishek Singh", email: "abhishek@chegg.com", office: "Santa Clara"}, {name: "Admas Kinfu", email: "akinfu@chegg.com", office: "Santa Clara"}, {name: "Albert Tseng", email: "albert@chegg.com", office: "Santa Clara"}, {name: "Alex Benton", email: "abenton@chegg.com", office: "Santa Clara"}, {name: "Alex Higgins-Hughes", email: "ahughes@chegg.com", office: "Santa Clara"}, {name: "Allen Wen", email: "allen@chegg.com", office: "Santa Clara"}, {name: "Allison Hirata", email: "ahirata@chegg.com", office: "Santa Clara"}, {name: "Amaresh Shukla", email: "amaresh@chegg.com", office: "Santa Clara"}, {name: "Amy Raftery", email: "araftery@chegg.com", office: "Santa Clara"}, {name: "Andrew Brown", email: "andy@chegg.com", office: "Santa Clara"}, {name: "Andrew Smith", email: "asmith@chegg.com", office: "Santa Clara"}, {name: "Andries Schutte", email: "andries@chegg.com", office: "Santa Clara"}, {name: "Anna Cho", email: "anna@chegg.com", office: "Santa Clara"}, {name: "Anna Maria Phan", email: "aphan@chegg.com", office: "Santa Clara"}, {name: "Anne Dwane", email: "anne@chegg.com", office: "Santa Clara"}, {name: "Anthony Yee", email: "anthony@chegg.com", office: "Santa Clara"}, {name: "Anusha Sethuraman", email: "anusha@chegg.com", office: "Santa Clara"}, {name: "Anyi Weng", email: "anyi@chegg.com", office: "Santa Clara"}, {name: "Arlene Leung", email: "arlene@chegg.com", office: "Santa Clara"}, {name: "Arun Bakthavatchalam", email: "arun@chegg.com", office: "Santa Clara"}, {name: "Ashit Joshi", email: "ashit@chegg.com", office: "Santa Clara"}, {name: "Ashley Burns", email: "aburns@chegg.com", office: "Santa Clara"}, {name: "Ashwini Tasgaonkar", email: "ashwini@chegg.com", office: "Santa Clara"}, {name: "Ben Van Roo", email: "bdvanroo@chegg.com", office: "Santa Clara"}, {name: "Bhargav Vadher", email: "bvadher@chegg.com", office: "Santa Clara"}, {name: "Brenda Colon", email: "brenda@chegg.com", office: "Santa Clara"}, {name: "Brendan Baker", email: "brendan@chegg.com", office: "Santa Clara"}, {name: "Brian Wilcox", email: "bwilcox@chegg.com", office: "Santa Clara"}, {name: "Carissa Rossi", email: "carissa@chegg.com", office: "Santa Clara"}, {name: "Carlos Salvador", email: "csalvador@chegg.com", office: "Santa Clara"}, {name: "Charles Geiger", email: "chuck@chegg.com", office: "Santa Clara"}, {name: "Charles Mulemi", email: "cmulemi@chegg.com", office: "Santa Clara"}, {name: "Chia-Tung Kuo", email: "tkuo@chegg.com", office: "Santa Clara"}, {name: "Chris Mikkelsen", email: "cmikkelsen@chegg.com", office: "Santa Clara"}, {name: "Christina Lee", email: "christina@chegg.com", office: "Santa Clara"}, {name: "Christina Moore", email: "cmoore@chegg.com", office: "Santa Clara"}, {name: "Christine Flynn", email: "christine@chegg.com", office: "Santa Clara"}, {name: "Christine Ho", email: "christineh@chegg.com", office: "Santa Clara"}, {name: "Christopher Aanes", email: "caanes@chegg.com", office: "Santa Clara"}, {name: "Cindy Velasco", email: "cindy@chegg.com", office: "Santa Clara"}, {name: "Colin Murphy", email: "colin@chegg.com", office: "Santa Clara"}, {name: "Courtney Monk", email: "courtney@chegg.com", office: "Santa Clara"}, {name: "Daniel Mosko", email: "daniel@chegg.com", office: "Santa Clara"}, {name: "Daniel Rosensweig", email: "dan@chegg.com", office: "Santa Clara"}, {name: "Daniela Nicola", email: "daniela@chegg.com", office: "Santa Clara"}, {name: "Danielle Talsma", email: "danielle@chegg.com", office: "Santa Clara"}, {name: "Dave Borders", email: "dave@chegg.com", office: "Santa Clara"}, {name: "David Bernhardt", email: "dbernhardt@chegg.com", office: "Santa Clara"}, {name: "Dax Eckenberg", email: "dax@chegg.com", office: "Santa Clara"}, {name: "Debra Thompson", email: "debra@chegg.com", office: "Santa Clara"}, {name: "Deeksha Sharma", email: "dsharma@chegg.com", office: "Santa Clara"}, {name: "Denis Baranov", email: "denis@chegg.com", office: "Santa Clara"}, {name: "Denise Helm", email: "denise@chegg.com", office: "Santa Clara"}, {name: "Derrek Chu", email: "derrek@chegg.com", office: "Santa Clara"}, {name: "Dhaval Shah", email: "dhaval@chegg.com", office: "Santa Clara"}, {name: "Dmitry Panov", email: "dmitry@chegg.com", office: "Santa Clara"}, {name: "Douglas Chagnon", email: "dchagnon@chegg.com", office: "Santa Clara"}, {name: "Douglas Pereyda", email: "doug@chegg.com", office: "Santa Clara"}, {name: "Elaine Amores", email: "jynki@chegg.com", office: "Santa Clara"}, {name: "Elaine Crenshaw", email: "elaine@chegg.com", office: "Santa Clara"}, {name: "Emily Saeli", email: "esaeli@chegg.com", office: "Santa Clara"}, {name: "Esther Lem", email: "esther@chegg.com", office: "Santa Clara"}, {name: "Fei Sha", email: "fei@chegg.com", office: "Santa Clara"}, {name: "Feihong Wu", email: "feihong@chegg.com", office: "Santa Clara"}, {name: "Frank Lemmon", email: "frank@chegg.com", office: "Santa Clara"}, {name: "Fumiaki Yamaoka", email: "fumiaki@chegg.com", office: "Santa Clara"}, {name: "Gary Tsang", email: "gary@chegg.com", office: "Santa Clara"}, {name: "Gary Yip", email: "gyip@chegg.com", office: "Santa Clara"}, {name: "George Sleiman", email: "george@chegg.com", office: "Santa Clara"}, {name: "Gerald Smith", email: "gerald@chegg.com", office: "Santa Clara"}, {name: "Gerard Genesse", email: "gerard@chegg.com", office: "Santa Clara"}, {name: "Gina Barbosa", email: "gina@chegg.com", office: "Santa Clara"}, {name: "Girish Krishnaswamy", email: "girish@chegg.com", office: "Santa Clara"}, {name: "Greg Braje", email: "greg@chegg.com", office: "Santa Clara"}, {name: "Haley Nguyen", email: "haley@chegg.com", office: "Santa Clara"}, {name: "Hannah Zachritz", email: "hannah@chegg.com", office: "Santa Clara"}, {name: "Harpreet Kaur", email: "hkaur@chegg.com", office: "Santa Clara"}, {name: "Heather Porter", email: "heather@chegg.com", office: "Santa Clara"}, {name: "Heather Tatroff", email: "htatroff@chegg.com", office: "Santa Clara"}, {name: "Helen Park", email: "helen@chegg.com", office: "Santa Clara"}, {name: "Hoai Dang", email: "ddang@chegg.com", office: "Santa Clara"}, {name: "Ilona Limonta-Volkova", email: "ilona@chegg.com", office: "Santa Clara"}, {name: "Irene Nguyen", email: "irene@chegg.com", office: "Santa Clara"}, {name: "Irina Borisova", email: "irina@chegg.com", office: "Santa Clara"}, {name: "Ismelito Malonzo", email: "ismelito@chegg.com", office: "Santa Clara"}, {name: "Jack Ferguson", email: "jferguson@chegg.com", office: "Santa Clara"}, {name: "James Kelly", email: "jkelly@chegg.com", office: "Santa Clara"}, {name: "James Sleeman", email: "jamess@chegg.com", office: "Santa Clara"}, {name: "Janel Granado", email: "janelg@chegg.com", office: "Santa Clara"}, {name: "Jarrett Ridgeway", email: "jd@chegg.com", office: "Santa Clara"}, {name: "Jasmine Pansoy", email: "jasmine@chegg.com", office: "Santa Clara"}, {name: "Jason Ho", email: "jho@chegg.com", office: "Santa Clara"}, {name: "Jason Schnitzer", email: "jason@chegg.com", office: "Santa Clara"}, {name: "Jeff Lawson", email: "jeff@chegg.com", office: "Santa Clara"}, {name: "Jenea Elliott", email: "jenea@chegg.com", office: "Santa Clara"}, {name: "Jennie Doberne", email: "jennie@chegg.com", office: "Santa Clara"}, {name: "Jennifer Lu", email: "jlu@chegg.com", office: "Santa Clara"}, {name: "Jennifer Wibowo", email: "jwibowo@chegg.com", office: "Santa Clara"}, {name: "Jenny Brandemuehl", email: "jenny@chegg.com", office: "Santa Clara"}, {name: "Jessica Agarwal", email: "jessica@chegg.com", office: "Santa Clara"}, {name: "Jia Gao", email: "jgao@chegg.com", office: "Santa Clara"}, {name: "Jitendrakumar Patel", email: "jpatel@chegg.com", office: "Santa Clara"}, {name: "Jo Rhett", email: "jo@chegg.com", office: "Santa Clara"}, {name: "Joel Stone", email: "joel@chegg.com", office: "Santa Clara"}, {name: "John Fabello", email: "johnf@chegg.com", office: "Santa Clara"}, {name: "John Fillmore", email: "jfillmore@chegg.com", office: "Santa Clara"}, {name: "John Pericich", email: "jpericich@chegg.com", office: "Santa Clara"}, {name: "John Pineda", email: "johnp@chegg.com", office: "Santa Clara"}, {name: "John Stuart", email: "stuart@chegg.com", office: "Santa Clara"}, {name: "Jonathan Einav", email: "jonathan@chegg.com", office: "Santa Clara"}, {name: "Jonathan Tsai", email: "jontsai@chegg.com", office: "Santa Clara"}, {name: "Joni Thomas", email: "joni@chegg.com", office: "Santa Clara"}, {name: "Joshua Huff", email: "josh@chegg.com", office: "Santa Clara"}, {name: "Joshua Mensah", email: "joshua@chegg.com", office: "Santa Clara"}, {name: "Joshua Richardson", email: "jric@chegg.com", office: "Santa Clara"}, {name: "Kaari Peterson", email: "kaari@chegg.com", office: "Santa Clara"}, {name: "Kalpana Sundaram", email: "kalpana@chegg.com", office: "Santa Clara"}, {name: "Karen Harrison", email: "kharrison@chegg.com", office: "Santa Clara"}, {name: "Karthik Lakshmana", email: "karthik@chegg.com", office: "Santa Clara"}, {name: "Karthik Ramesh", email: "kramesh@chegg.com", office: "Santa Clara"}, {name: "Karthik Shanmugasundaram", email: "karthiks@chegg.com", office: "Santa Clara"}, {name: "Katherine Anderson", email: "katherine@chegg.com", office: "Santa Clara"}, {name: "Kathleen Herder", email: "kathleen@chegg.com", office: "Santa Clara"}, {name: "Kathy Au Yeung", email: "kathya@chegg.com", office: "Santa Clara"}, {name: "Kelly Chen", email: "kchen@chegg.com", office: "Santa Clara"}, {name: "Ken Ha", email: "ken@chegg.com", office: "Santa Clara"}, {name: "Kevin Balzen", email: "kbalzen@chegg.com", office: "Santa Clara"}, {name: "Kevin Lee", email: "klee@chegg.com", office: "Santa Clara"}, {name: "Kevin Steele", email: "ksteele@chegg.com", office: "Santa Clara"}, {name: "Khanh Dang", email: "khanh@chegg.com", office: "Santa Clara"}, {name: "Kimberly Crawford", email: "kim@chegg.com", office: "Santa Clara"}, {name: "Kimberly Quach", email: "kimberly@chegg.com", office: "Santa Clara"}, {name: "Komal Patel", email: "komal@chegg.com", office: "Santa Clara"}, {name: "Krishnaprasad Iyer", email: "krish@chegg.com", office: "Santa Clara"}, {name: "Kristine Fallorina", email: "kfallorina@chegg.com", office: "Santa Clara"}, {name: "Kyle Verdone", email: "kyle@chegg.com", office: "Santa Clara"}, {name: "Kyrie Robinson", email: "krobinson@chegg.com", office: "Santa Clara"}, {name: "Laura James", email: "laura@chegg.com", office: "Santa Clara"}, {name: "Lida Eltejaein", email: "lida@chegg.com", office: "Santa Clara"}, {name: "Liem Nguyen", email: "liem@chegg.com", office: "Santa Clara"}, {name: "Lila Barton", email: "lila@chegg.com", office: "Santa Clara"}, {name: "Lilia Hu", email: "lilia@chegg.com", office: "Santa Clara"}, {name: "Lillian Wei", email: "lillian@chegg.com", office: "Santa Clara"}, {name: "Linyu He", email: "lhe@chegg.com", office: "Santa Clara"}, {name: "Lora Kyle", email: "lora@chegg.com", office: "Santa Clara"}, {name: "Madeline Perretta", email: "madeline@chegg.com", office: "Santa Clara"}, {name: "Madhuri Latha Prathikantam", email: "madhurip@chegg.com", office: "Santa Clara"}, {name: "Manoj Kokal", email: "manoj@chegg.com", office: "Santa Clara"}, {name: "Marie Ettema", email: "marie@chegg.com", office: "Santa Clara"}, {name: "Mark Allen", email: "mallen@chegg.com", office: "Santa Clara"}, {name: "Matthew Herbst", email: "mherbst@chegg.com", office: "Santa Clara"}, {name: "Matthew Mendenhall", email: "mmendenhall@chegg.com", office: "Santa Clara"}, {name: "Matthew Reichling", email: "mreichling@chegg.com", office: "Santa Clara"}, {name: "Matthew Sullivant", email: "msullivant@chegg.com", office: "Santa Clara"}, {name: "Matthew Weathers", email: "mweathers@chegg.com", office: "Santa Clara"}, {name: "Maxim Basaraba", email: "max@chegg.com", office: "Santa Clara"}, {name: "Mayra Galvan", email: "mayra@chegg.com", office: "Santa Clara"}, {name: "Melanie La Fever", email: "melanie@chegg.com", office: "Santa Clara"}, {name: "Michael Coffaro", email: "mcoffaro@chegg.com", office: "Santa Clara"}, {name: "Michael Mueller", email: "mmueller@chegg.com", office: "Santa Clara"}, {name: "Michael Rogers", email: "mrogers@chegg.com", office: "Santa Clara"}, {name: "Mike Osier", email: "mikeo@chegg.com", office: "Santa Clara"}, {name: "Mingjia Liu", email: "phoebe@chegg.com", office: "Santa Clara"}, {name: "Mrudula Athuluri", email: "mrudula@chegg.com", office: "Santa Clara"}, {name: "Muralimanoher Boja", email: "manoharb@chegg.com", office: "Santa Clara"}, {name: "Myat Aye", email: "mai@chegg.com", office: "Santa Clara"}, {name: "Najia Yarkhan", email: "najia@chegg.com", office: "Santa Clara"}, {name: "Nancy Qian", email: "nqian@chegg.com", office: "Santa Clara"}, {name: "Nathan Schultz", email: "nathan@chegg.com", office: "Santa Clara"}, {name: "Nathaniel Shak", email: "nshak@chegg.com", office: "Santa Clara"}, {name: "Navam Gupta", email: "navam@chegg.com", office: "Santa Clara"}, {name: "Nhan Lam", email: "nhan@chegg.com", office: "Santa Clara"}, {name: "Nicolas Kim", email: "nickim@chegg.com", office: "Santa Clara"}, {name: "Nicole Katwan", email: "nicole@chegg.com", office: "Santa Clara"}, {name: "Nikita Doshi", email: "ndoshi@chegg.com", office: "Santa Clara"}, {name: "Nimish Gogri", email: "nimish@chegg.com", office: "Santa Clara"}, {name: "Nina Tolentino", email: "ninat@chegg.com", office: "Santa Clara"}, {name: "Nitin Gupta", email: "ngupta@chegg.com", office: "Santa Clara"}, {name: "Novita Salim", email: "novita@chegg.com", office: "Santa Clara"}, {name: "Nyssa Aragon", email: "nyssa@chegg.com", office: "Santa Clara"}, {name: "Ohad Eder-Pressman", email: "ohad@chegg.com", office: "Santa Clara"}, {name: "Parniyan Gutierrez", email: "parniyan@chegg.com", office: "Santa Clara"}, {name: "Paul Czyzewski", email: "pczyzewski@chegg.com", office: "Santa Clara"}, {name: "Pauli Wang", email: "pauli@chegg.com", office: "Santa Clara"}, {name: "Philip Tsai", email: "philip@chegg.com", office: "Santa Clara"}, {name: "Pierce Lieberman", email: "pierce@chegg.com", office: "Santa Clara"}, {name: "Prabha Werner", email: "prabha@chegg.com", office: "Santa Clara"}, {name: "Preeti Bhatevara", email: "pbhatevara@chegg.com", office: "Santa Clara"}, {name: "Pritie Sharda", email: "pritie@chegg.com", office: "Santa Clara"}, {name: "Rabia Rafique", email: "rabia@chegg.com", office: "Santa Clara"}, {name: "Rahul Mutalik Desai", email: "rahul@chegg.com", office: "Santa Clara"}, {name: "Rajat Sar", email: "rajat@chegg.com", office: "Santa Clara"}, {name: "Rangappa Gopinath Mekerahalli", email: "gopi@chegg.com", office: "Santa Clara"}, {name: "Ravinder Batra", email: "ravinder@chegg.com", office: "Santa Clara"}, {name: "Renee Campbell", email: "rcampbell@chegg.com", office: "Santa Clara"}, {name: "Renee Castro-Beck", email: "rcastrobeck@chegg.com", office: "Santa Clara"}, {name: "Rhonda Grindstaff Sesek", email: "rhonda@chegg.com", office: "Santa Clara"}, {name: "Richard Moore", email: "rmoore@chegg.com", office: "Santa Clara"}, {name: "Rick Truong", email: "rtruong@chegg.com", office: "Santa Clara"}, {name: "Rishabh Goel", email: "rgoel@chegg.com", office: "Santa Clara"}, {name: "Rishika Agarwal", email: "rishika@chegg.com", office: "Santa Clara"}, {name: "Ritesh Patel", email: "ritesh@chegg.com", office: "Santa Clara"}, {name: "Robert Chesnut", email: "rob@chegg.com", office: "Santa Clara"}, {name: "Robert Patterson", email: "rpatterson@chegg.com", office: "Santa Clara"}, {name: "Robert Rhoden", email: "robert@chegg.com", office: "Santa Clara"}, {name: "Robin Tomasello", email: "rtomasello@chegg.com", office: "Santa Clara"}, {name: "Roded Konforty", email: "roded@chegg.com", office: "Santa Clara"}, {name: "Ron Sandel", email: "ron@chegg.com", office: "Santa Clara"}, {name: "Rosa Ren", email: "rosa@chegg.com", office: "Santa Clara"}, {name: "Sabina Young", email: "sabina@chegg.com", office: "Santa Clara"}, {name: "Sam Schwartzstein", email: "sams@chegg.com", office: "Santa Clara"}, {name: "Samuel Subity", email: "ssubity@chegg.com", office: "Santa Clara"}, {name: "Sarah Richardson", email: "srichardson@chegg.com", office: "Santa Clara"}, {name: "Satyajit Roy Choudhury", email: "sroy@chegg.com", office: "Santa Clara"}, {name: "Scot Melville", email: "scot@chegg.com", office: "Santa Clara"}, {name: "Seong-Min Kim", email: "seong@chegg.com", office: "Santa Clara"}, {name: "Sergey Melnik", email: "sergey@chegg.com", office: "Santa Clara"}, {name: "Sergey Yentus", email: "serge@chegg.com", office: "Santa Clara"}, {name: "Shafeen Alam", email: "shafeen@chegg.com", office: "Santa Clara"}, {name: "Simon Cao", email: "simon@chegg.com", office: "Santa Clara"}, {name: "Sizhu Zong", email: "carol@chegg.com", office: "Santa Clara"}, {name: "Stephanie Lam", email: "slam@chegg.com", office: "Santa Clara"}, {name: "Stephen Baille", email: "sbaillie@chegg.com", office: "Santa Clara"}, {name: "Steven Eysenbrandts", email: "seysenbrandts@chegg.com", office: "Santa Clara"}, {name: "Stuti Sanketh", email: "stuti@chegg.com", office: "Santa Clara"}, {name: "Sue Baker", email: "sbaker@chegg.com", office: "Santa Clara"}, {name: "Sunil Goplani", email: "sunil@chegg.com", office: "Santa Clara"}, {name: "Sunil Kapil", email: "skapil@chegg.com", office: "Santa Clara"}, {name: "Surekha Gill", email: "surekha@chegg.com", office: "Santa Clara"}, {name: "Suzi Park", email: "suzi@chegg.com", office: "Santa Clara"}, {name: "Svetlana Laver", email: "lana@chegg.com", office: "Santa Clara"}, {name: "Swathi Chandrasekar", email: "swathic@chegg.com", office: "Santa Clara"}, {name: "Tak Wong", email: "tak@chegg.com", office: "Santa Clara"}, {name: "TE Liu", email: "sliu@chegg.com", office: "Santa Clara"}, {name: "Thangaraju Karuppusamy", email: "thanga@chegg.com", office: "Santa Clara"}, {name: "Thomas Bertao", email: "thomas@chegg.com", office: "Santa Clara"}, {name: "Timothy Cho", email: "tcho@chegg.com", office: "Santa Clara"}, {name: "Timothy Yee", email: "tyee@chegg.com", office: "Santa Clara"}, {name: "Tomer Tal", email: "ttal@chegg.com", office: "Santa Clara"}, {name: "Toral Patel", email: "toral@chegg.com", office: "Santa Clara"}, {name: "Tracy Clemente", email: "tracy@chegg.com", office: "Santa Clara"}, {name: "Tricia Tsai", email: "tricia@chegg.com", office: "Santa Clara"}, {name: "Twyla Campbell", email: "twyla@chegg.com", office: "Santa Clara"}, {name: "Usher Lieberman", email: "usher@chegg.com", office: "Santa Clara"}, {name: "Vasantkumar Patel", email: "vasant@chegg.com", office: "Santa Clara"}, {name: "Vidya Dayaker", email: "vdayaker@chegg.com", office: "Santa Clara"}, {name: "Vijay Venkatakrishnan", email: "vijayv@chegg.com", office: "Santa Clara"}, {name: "Vijayanarasimhan Raghavendiran", email: "vijay@chegg.com", office: "Santa Clara"}, {name: "Vincent Scialdone", email: "vscialdone@chegg.com", office: "Santa Clara"}, {name: "Wai Kit Yu", email: "roy@chegg.com", office: "Santa Clara"}, {name: "Walter Underwood", email: "wunder@chegg.com", office: "Santa Clara"}, {name: "Wesley Brandemuehl", email: "wesley@chegg.com", office: "Santa Clara"}, {name: "William Britt", email: "bbritt@chegg.com", office: "Santa Clara"}, {name: "William Jimenez", email: "wjimenez@chegg.com", office: "Santa Clara"}, {name: "William Song", email: "wsong@chegg.com", office: "Santa Clara"}, {name: "Xia You", email: "xia@chegg.com", office: "Santa Clara"}, {name: "Xin Ai", email: "xai@chegg.com", office: "Santa Clara"}, {name: "Xuantam Nguyen", email: "tammy@chegg.com", office: "Santa Clara"}, {name: "Yashwanth Chanamolu", email: "yashwanth@chegg.com", office: "Santa Clara"}, {name: "Yip Chung", email: "cchung@chegg.com", office: "Santa Clara"}, {name: "Yogesh Natarajan", email: "yogesh@chegg.com", office: "Santa Clara"}, {name: "Yoon Jung Hong", email: "june@chegg.com", office: "Santa Clara"}, {name: "Yuen Kit Lai", email: "jacky@chegg.com", office: "Santa Clara"}, {name: "Yun Chi", email: "yun@chegg.com", office: "Santa Clara"}, {name: "Zeeshan Maqbool", email: "zeeshan@chegg.com", office: "Santa Clara"}, {name: "Zhenyu Hu", email: "eric@chegg.com", office: "Santa Clara"}, {name: "Zoha Zargham", email: "zoha@chegg.com", office: "Santa Clara"}, {name: "Andrew McMahon", email: "amcmahon@chegg.com", office: "Utah"}, {name: "Justin Hutchings", email: "jhutchings@chegg.com", office: "Utah"}, {name: "Lance Hydrick", email: "lance@chegg.com", office: "Utah"}, {name: "Lloyd Winkelman", email: "lloyd@chegg.com", office: "Utah"}, {name: "Peter Phippen", email: "pphippen@chegg.com", office: "Utah"}, {name: "Ryan Munson", email: "rmunson@chegg.com", office: "Utah"}]
    return employees;
  });
}(angular));

