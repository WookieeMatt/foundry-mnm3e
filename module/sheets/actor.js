import mnm3e from "../config.js";

/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class MM3ActorSheet extends ActorSheet {

    /**
     * Augment the basic actor data with additional dynamic data.
     */
    prepareData() {
      super.prepareData();
  
      const actorData = this.data;
      const data = actorData.data;
      const flags = actorData.flags;
  
      // Make separate methods for each Actor type (character, npc, etc.) to keep
      // things organized.
      if (actorData.type === 'hero') this._prepareCharacterData(actorData);
      if (actorData.type === 'supervillain') this._prepareCharacterData(actorData);
    }
  
    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(actorData) {
      const data = actorData.data;
  
      // Make modifications to data here. For example:
  
      // Loop through ability scores, and add their modifiers to our sheet output.
      for (let [key, skl] of Object.entries(data.skills)) {
        // Calculate the modifier using rules.
        skl.value = Math.clamped(Number(skl.value)).toNearest(0) ?? 0;
        ability.mod = Math.floor;
      }
    }
    
    _prepareSkills(actorData, bonuses, checkBonus, originalSkills) {
        
        const data = actorData.data;
        const flags = actorData.flags.dnd5e || {};
    
        // Skill modifiers
        const skillBonus = Number.isNumeric(bonuses.skill) ? parseInt(bonuses.skill) :  0;
        for (let [id, skl] of Object.entries(data.skills)) {
          skl.value = Math.clamped(Number(skl.value).toNearest(0.5), 0, 2) ?? 0;
          let round = Math.floor;
    
          // Compute modifier
          skl.bonus = checkBonus + skillBonus;
          skl.mod = data.abilities[skl.ability].mod;
          skl.prof = round(skl.value * data.attributes.prof);
          skl.total = skl.mod + skl.prof + skl.bonus;
        }
      }
    
  }
  