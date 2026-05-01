const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];
function login(users, username, password) {
    let user = users.filter(u => u.username == username); 
    user = user[0];
    if (user.isBlocked) {
        console.log("Օգտատերը արգելափակված է");
        return;
    }
    if (!user) {
        console.log("Օգտատերը չի գտնվել");
        return;
    }
    if (user.password != password) {
        console.log("Սխալ գաղտնաբառ");
        return;
    }
    console.log("Բարի գալուստ, " + username);
}