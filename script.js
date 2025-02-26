const auctionItems = [
    { name: "Vintage Watch", price: 100, img: "https://plus.unsplash.com/premium_photo-1664392111619-8066fc3d1dd3?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 10 },
    { name: "Rare Painting", price: 200, img: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa", duration: 15 },
    { name: "Antique Clock", price: 150, img: "https://images.unsplash.com/photo-1605687595239-ed2e660ef063?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 12 },
    { name: "Handcrafted Vase", price: 120, img: "https://plus.unsplash.com/premium_photo-1681345318617-a398e89c4c71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 8 },
    { name: "Classic Car Miniature", price: 300, img: "https://plus.unsplash.com/premium_photo-1737029753950-65889f678c25?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 14 },
    { name: "Luxury Handbag", price: 500, img:  "https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 20 },
    { name: "Collector’s Coin", price: 80, img: "https://plus.unsplash.com/premium_photo-1681396692271-1b1c5eeef182?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 25 },
    { name: "Rare Stamps Set", price: 250, img: "https://images.unsplash.com/photo-1668349661067-4c64fddcd519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 30 },
    { name: "Signed Football", price: 450, img: "https://images.unsplash.com/photo-1605002713581-123e77bcf83d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 18 },
    { name: "Limited Edition Sneakers", price: 600, img: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 10 },
    { name: "Gold Bracelet", price: 700, img: "https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 22 },
    { name: "Vintage Camera", price: 275, img:  "https://images.unsplash.com/photo-1512390225428-a9d51c817f94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 16 },
    { name: "Handmade Guitar", price: 900, img: "https://images.unsplash.com/photo-1532505593-12fcd530eba3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 24 },
    { name: "Limited Edition Watch", price: 1000, img:  "https://images.unsplash.com/photo-1600897425543-5369a38bd193?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 12 },
    { name: "Retro Gaming Console", price: 400, img:  "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 15 }
];

let currentPage = 1;
const itemsPerPage = 5;

function displayPage(page) {
    let auctionList = document.getElementById("auction-list");
    auctionList.innerHTML = "";

    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let items = auctionItems.slice(start, end);

    items.forEach((item, index) => {
        let auctionItem = document.createElement("div");
        auctionItem.className = "auction-item";
        let itemId = start + index + 1;
        
        auctionItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Starting Bid: $${item.price}</p>
            <p>Time Left: <span id="timer-${itemId}"></span></p>
            <button onclick="placeBid(${itemId}, this)">Place Bid</button>
            <div class="bid-history" id="bid-history-${itemId}"></div>
        `;
        auctionList.appendChild(auctionItem);

        startCountdown(`timer-${itemId}`, item.duration);
    });

    document.getElementById("pageIndicator").innerText = `Page ${currentPage} of ${Math.ceil(auctionItems.length / itemsPerPage)}`;
}

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > Math.ceil(auctionItems.length / itemsPerPage)) currentPage = Math.ceil(auctionItems.length / itemsPerPage);
    displayPage(currentPage);
}

function placeBid(itemId, button) {
    button.innerText = "Placing Bid...";
    button.disabled = true;

    setTimeout(() => {
        let bidAmount = prompt(`Enter your bid amount for Item ${itemId}:`);
        if (bidAmount) {
            let bidHistory = document.getElementById(`bid-history-${itemId}`);
            let newBid = document.createElement("p");
            newBid.textContent = `Bid: $${bidAmount}`;
            bidHistory.appendChild(newBid);
        }
        button.innerText = "Place Bid";
        button.disabled = false;
    }, 3000);
}

function startCountdown(timerId, duration) {
    let countDownDate = new Date().getTime() + duration * 60000;

    let timer = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        let minutes = Math.floor(timeLeft / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById(timerId).innerText = `${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById(timerId).innerText = "Auction Ended";
        }
    }, 1000);
}

document.querySelectorAll(".auction-item button").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 200);
        playClickSound();
    });
});

function playClickSound() {
    document.getElementById("click-sound").play();
}

displayPage(1);
