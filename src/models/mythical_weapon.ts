import client from "../database";

export type Weapon = {
  id: Number;
  name: string;
  type: string;
  weight: number;
}

export class MythicalWeaponStore {
 async index(): Promise<Weapon[]> {
    try{
      const conn = await client.connect()
      const sql = 'select * from mythical_weapon'
      const result = await conn.query(sql)

      conn.release();
      return result.rows
    }catch(err){
       throw new Error('cant get weapons ')
    }   
 }

 async add(weapon: Weapon): Promise<Weapon>{
   try{
      const conn = await client.connect()
      const sql = 'insert into mythical_weapon (name, type, weight) values ($1, $2, $3, $4)'
      const result = await conn.query(sql, [weapon.name, weapon.type, weapon.weight])

      return result.rows[0]
   }catch(err){
       throw new Error('cant get weapons ')
    }  
 }
}