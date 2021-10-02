import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: 'gustavo',
        email: 'gustavo@adonisjs.com',
        password: 'secret',
      },
      {
        username: 'eduarda',
        email: 'eduarda@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}
