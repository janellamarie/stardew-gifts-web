import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Villager } from './models/Villager.ts'
import villagersJSON from './assets/data/villagers.json' // import villagers data

export function convertVillagersJSONToVillagerType() {
  const tempVillager = []
  for (const v of villagersJSON) {
    const temp = new Villager(v.name, v.birthday, v.loves, v.likes, v.neutral, v.dislikes, v.hates)
    tempVillager.push(temp)
  }
  return tempVillager
}

export function filterVillagers(toSearch: string, category: string) {
  const filtered: Villager[] = [];
  console.log("Looking for villages with " + toSearch + " as " + category)
  if(toSearch != '') {
    for(const villager of villagersJSON) {
      if(villager[category as keyof Villager] != null) {
        if(villager[category as keyof Villager]!.toLocaleString().includes(toSearch)) {
          if(!filtered.includes(villager)) {
            filtered.push(villager)
          }
        }
      } 
    }
    console.log("filtered list: " + filtered)
    return filtered
  }
  return convertVillagersJSONToVillagerType();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
