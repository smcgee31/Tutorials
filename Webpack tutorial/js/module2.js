var _ = require( 'lodash' );

var people = [ {
	"id": 1,
	"first_name": "Anna",
	"last_name": "Wilson",
	"email": "awilson0@yahoo.co.jp",
	"gender": "Female",
	"ip_address": "205.170.162.241"
}, {
	"id": 2,
	"first_name": "Douglas",
	"last_name": "Long",
	"email": "dlong1@columbia.edu",
	"gender": "Male",
	"ip_address": "131.119.36.125"
}, {
	"id": 3,
	"first_name": "Kathy",
	"last_name": "Howell",
	"email": "khowell2@360.cn",
	"gender": "Female",
	"ip_address": "212.156.89.222"
}, {
	"id": 4,
	"first_name": "Carl",
	"last_name": "Ross",
	"email": "cross3@japanpost.jp",
	"gender": "Male",
	"ip_address": "114.1.178.83"
}, {
	"id": 5,
	"first_name": "Phillip",
	"last_name": "Sanders",
	"email": "psanders4@unc.edu",
	"gender": "Male",
	"ip_address": "142.228.205.212"
}, {
	"id": 6,
	"first_name": "Carolyn",
	"last_name": "Dixon",
	"email": "cdixon5@wikimedia.org",
	"gender": "Female",
	"ip_address": "80.61.218.206"
}, {
	"id": 7,
	"first_name": "Albert",
	"last_name": "Robinson",
	"email": "arobinson6@csmonitor.com",
	"gender": "Male",
	"ip_address": "160.52.158.43"
}, {
	"id": 8,
	"first_name": "Marie",
	"last_name": "Rogers",
	"email": "mrogers7@ucoz.ru",
	"gender": "Female",
	"ip_address": "214.95.247.249"
}, {
	"id": 9,
	"first_name": "Laura",
	"last_name": "Fuller",
	"email": "lfuller8@latimes.com",
	"gender": "Female",
	"ip_address": "222.228.113.229"
}, {
	"id": 10,
	"first_name": "Maria",
	"last_name": "Dunn",
	"email": "mdunn9@symantec.com",
	"gender": "Female",
	"ip_address": "227.67.112.100"
}, {
	"id": 11,
	"first_name": "Jesse",
	"last_name": "Kelley",
	"email": "jkelleya@rambler.ru",
	"gender": "Male",
	"ip_address": "88.47.49.135"
}, {
	"id": 12,
	"first_name": "Walter",
	"last_name": "Chavez",
	"email": "wchavezb@ft.com",
	"gender": "Male",
	"ip_address": "87.195.229.252"
}, {
	"id": 13,
	"first_name": "Lawrence",
	"last_name": "Hill",
	"email": "lhillc@dell.com",
	"gender": "Male",
	"ip_address": "134.95.88.0"
}, {
	"id": 14,
	"first_name": "George",
	"last_name": "Griffin",
	"email": "ggriffind@exblog.jp",
	"gender": "Male",
	"ip_address": "216.252.33.100"
}, {
	"id": 15,
	"first_name": "Justin",
	"last_name": "Mccoy",
	"email": "jmccoye@blogtalkradio.com",
	"gender": "Male",
	"ip_address": "200.82.20.227"
}, {
	"id": 16,
	"first_name": "Larry",
	"last_name": "Mccoy",
	"email": "lmccoyf@webnode.com",
	"gender": "Male",
	"ip_address": "48.158.135.244"
}, {
	"id": 17,
	"first_name": "Sarah",
	"last_name": "Washington",
	"email": "swashingtong@gravatar.com",
	"gender": "Female",
	"ip_address": "123.131.71.5"
}, {
	"id": 18,
	"first_name": "Margaret",
	"last_name": "Thomas",
	"email": "mthomash@cnet.com",
	"gender": "Female",
	"ip_address": "23.172.55.183"
}, {
	"id": 19,
	"first_name": "Ashley",
	"last_name": "Mason",
	"email": "amasoni@blogger.com",
	"gender": "Female",
	"ip_address": "61.210.156.32"
}, {
	"id": 20,
	"first_name": "Julie",
	"last_name": "Gutierrez",
	"email": "jgutierrezj@paypal.com",
	"gender": "Female",
	"ip_address": "129.79.220.46"
} ];

var femaleCount = _.filter(people, {gender: "Female"}).length;
alert(femaleCount + ' females!');

console.log( 'module2 stuff' );
