import { BigNumber, ethers, utils } from "ethers"
import { moduloP, primeNumber, Share } from "src"

export class Polynomial {
  publicAddress: string
  mnemonic: string
  polynomialS: BigNumber
  polynomialA1: BigNumber

  constructor() {
    const wallet = ethers.Wallet.createRandom()
    this.publicAddress = wallet.address
    this.mnemonic = wallet.mnemonic.phrase
    this.polynomialS = BigNumber.from(wallet.privateKey)
    this.polynomialA1 = this.randomNumber()
  }

  public replaceWallet(privateKey: string) {
    const wallet = new ethers.Wallet(privateKey)
    this.publicAddress = wallet.address
    this.mnemonic = null
    this.polynomialS = BigNumber.from(privateKey)
    this.polynomialA1 = this.randomNumber()
  }

  public randomNumber() {
    return BigNumber.from(utils.randomBytes(32))
  }

  public findY(x: BigNumber) {
    return this.polynomialS.add(x.mul(this.polynomialA1))
  }

  public createShares(n: number): Share[] {
    let shares = []
    for (let i = 0; i < n; i++) {
      shares = [
        ...shares,
        {
          x: BigNumber.from(primeNumber[i]),
          y: this.findY(BigNumber.from(primeNumber[i])),
        },
      ]
    }
    return shares
  }

  public reconstructPrivateKey(share1: Share, share2: Share) {
    const privateKey = share1.y
      .mul(share2.x)
      .div(share2.x.sub(share1.x))
      .add(share2.y.mul(share1.x).div(share1.x.sub(share2.x)))
      .mod(moduloP)
    const wallet = new ethers.Wallet(privateKey.toString())
    this.publicAddress = wallet.address
    if (this.polynomialS !== privateKey) {
      this.mnemonic = null
      this.polynomialS = privateKey
    }
    return privateKey
  }

  public test() {
    console.log("private key: ", this.polynomialS)

    const shares = this.createShares(5)

    const privateKey12 = this.reconstructPrivateKey(shares[0], shares[1])
    console.log("reconstruct private key 12: ", privateKey12)

    const privateKey15 = this.reconstructPrivateKey(shares[0], shares[4])
    console.log("reconstruct private key 14: ", privateKey15)

    const privateKey45 = this.reconstructPrivateKey(shares[3], shares[4])
    console.log("reconstruct private key 45: ", privateKey45)
  }
}
