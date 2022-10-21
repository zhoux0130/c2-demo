import { MythicalWeaponStore } from "../mythical_weapon";

const store = new MythicalWeaponStore()

describe("mythical Weapon Model", ()=>{
  it('should have an index method', ()=>{
    expect(store.index).toBeDefined();
  })

  it('index method should return a list of weaponse',async () => {
    const result = await store.index()
    expect(result).toEqual([])
  })
})