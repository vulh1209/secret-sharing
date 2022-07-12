import { BigNumber } from "ethers"

const maxPrivateKeyNumber =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

export const moduloP = BigNumber.from(maxPrivateKeyNumber)

export const primeNumber = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 167, 173, 179, 181, 191, 193, 199, 203, 207, 211, 227, 233, 239, 251,
  257, 263, 269, 281, 293, 307, 311, 317, 337, 347, 353, 359, 379, 389, 401,
  409, 419, 431, 443, 449, 461, 467, 479, 487, 491, 499, 503,
]
