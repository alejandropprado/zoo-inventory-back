export class Animal {
  private id: string | null
  private scientific_name: string
  private common_name: string
  private quantity: number

  constructor(id: string | null, scientific_name: string, common_name: string, quantity: number) {
    this.id = id
    this.scientific_name = scientific_name
    this.common_name = common_name
    this.quantity = quantity
  }

  setID(id: string) {
    this.id = id
  }
}