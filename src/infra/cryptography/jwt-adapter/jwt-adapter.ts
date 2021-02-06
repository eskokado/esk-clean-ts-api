import jwt from 'jsonwebtoken'
import { Encrypter } from './../../../data/protocols/cryptography/encrypter'
import { Decrypter } from './../../../data/protocols/cryptography/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}
  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return Promise.resolve(accessToken)
  }

  async decrypt (token: string): Promise<string> {
    const value: any = await jwt.verify(token, this.secret)
    return value
  }
}
