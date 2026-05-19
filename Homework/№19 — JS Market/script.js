const orders = [
  {
    id: 1,
    user: "Ivan",
    items: [
      { name: "Laptop", price: 1200, qty: 1 },
      { name: "Mouse", price: 25, qty: 2 },
    ],
    status: "pending",
    createdAt: "2026-04-28",
  },
  {
    id: 2,
    user: "Anna",
    items: [{ name: "Phone", price: 800, qty: 1 }],
    status: "completed",
    createdAt: "2026-04-20",
  },
  {
    id: 3,
    user: "Ivan",
    items: [{ name: "Keyboard", price: 100, qty: 1 }],
    status: "pending",
    createdAt: "2026-04-29",
  },
];

function calculateOrderTotal(order) {
  let total = 0;

  for (let i = 0; i < order.items.length; i++) {
    let item = order.items[i];
    total += item.price * item.qty;

    return total;
  }
}

function getUserPendingOrders(orders, username) {
  let result = [""];

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (order.user === username && order.status === "pending") {
      result.push(order);
    }
  }

  return result;
}

function getTotalRevenue(orders) {
  let revenue = 0;

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (order.status === "completed") {
      revenue += calculateOrderTotal(order);
    }
  }

  return revenue;
}

function groupOrdersByUser(orders) {
  let grouped = {};

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let username = order.user;

    if (grouped[username] === undefined) {
      grouped[username] = [];
    }

    grouped[username].push(order);
  }

  return grouped;
}

function getTopUsers(orders, topN) {
  let userTotals = {};

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (order.status === "completed") {
      let username = order.user;
      let orderCost = calculateOrderTotal(order);

      if (userTotals[username] === undefined) {
        userTotals[username] = 0;
      }

      userTotals[username] += orderCost;
    } else {
      let username = order.user;
      if (userTotals[username] === undefined) {
        userTotals[username] = 0;
      }
    }
  }

  let usersArray = [];
  for (let name in userTotals) {
    usersArray.push({
      user: name,
      total: userTotals[name],
    });
  }

  usersArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return usersArray.slice(0, topN);
}
