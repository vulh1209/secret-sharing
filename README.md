<p align="center">
    <a href="https://atherlabs.com/" target="blank">
        <img src="https://atherlabs.com/web/public/images/logos/logo.png" width="120" alt="Atherlab" />
    </a>
</p>
<p align="center" style="font-size: 16px; font-weight: 700">
    <a href="https://atherlabs.com" target="_blank">Atherlabs secret sharing</a> is a SDK to build Atherlab wallet
</p>

---

## Structure

| Codebase         | Description |
| ---------------- | ----------- |
| [core](src/core) | API server  |

---

## Tech stack

<table>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="24" alt="Loyalty Dashboard" />
                <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
            </td>
        <td valign="bottom">Strongly typed programming language that builds on JavaScript</td>
    </tr>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://docs.ethers.io/v5/static/logo.svg" width="24" alt="ethers.js" />
                <a href="https://docs.ethers.io/v5/static/logo.svg" target="_blank">Ethers.js</a>
            </td>
        <td valign="bottom">The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.</td>
    </tr>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://nestjs.com/img/logo-small.svg" width="24" alt="Shamir’s Secret Sharing Algorithm" />
                <a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing" target="_blank">Shamir’s Secret Sharing Algorithm</a>
            </td>
        <td valign="bottom">Shamir's Secret Sharing, formulated by Adi Shamir, is one of the first secret sharing schemes in cryptography. It is based on polynomial interpolation over finite fields</td>
    </tr>
</table>

---

## Scripts

- npm i secret-sharing

---

## How to use

<table>
    <tr>
        <td>const polynomial = new Polynomial()</td>
        <td>init polynomial</td>
    </tr>
    <tr>
        <td>polynomial.createShares(n:number)</td>
        <td>split privateKey to n share</td>
    </tr>
    <tr>
        <td>polynomial.reconstructPrivateKey(share1: Share, share2: Share)</td>
        <td>reconstruct 2 of n share to private key</td>
    </tr>

</table>

---

## Branches

<table>
    <tr>
        <td><code>main</code></td>
        <td>Production branch. Code on this branch will be built and deployed to production website</td>
    </tr>
     <tr>
        <td><code>develop</code></td>
        <td>Development branch. Code on this branch will be built and deploy to development lib. New code should be pushed to this branch for testing, then merged to main.</td>
    </tr>
</table>
