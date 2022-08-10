let names = ['Rosalina', 'Toadette', 'Mario', 'Luigi'];
const getRandomName = () => `${names[Math.floor(Math.random() * names.length)]}`;
// console.log(getRandomName())


class Hero {
    constructor (name, totalCoins, status, hasStar, gameActive=true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar 
        // this.gameActive = gameActive
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if(this.hasStar){
            this.hasStar = false
            return
        }
        if(this.status === 'powered up'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'small'
        }else if(this.status === 'small'){
            this.status = 'dead'
            this.gameActive = false
        } 

    }
    //move endgame outside of class
    endGame() {
        this.gameActive = false;
        console.log(`\n ${this.name} Died, \n Game Over `);
        clearInterval(runTime);
    }

    gotPowerUp(){
        this.hasStar = false
        if(this.status === 'dead'){
        }else if(this.status === 'small'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'powered up'
        }else if(this.status === 'powered up'){
            this.hasStar = true
        }

    }
    addCoin(){
        this.totalCoins++

    }
    print(){
        console.log(`Name: ${this.name}
        Total Coins: ${this.totalCoins}
        Status: ${this.status}
        Has Star: ${this.hasStar}`)
    }
}

const player = new Hero (names, 0, 'small', false)
// player.setName(getRandomName)
player.setName(getRandomName())
// console.log(getRandomName());

let runTime = setInterval(() => {
    player.print();
    let randomEvent = Math.floor((Math.random() * 3));
    console.log(`Random Event(s): ${randomEvent}`)
    if (player.status === "dead"){
        player.endGame()
    }
    if (randomEvent === 0) {
        player.gotHit();
    } else if (randomEvent === 1) {
        player.gotPowerUp();
    } else player.addCoin();
}, 1500);
