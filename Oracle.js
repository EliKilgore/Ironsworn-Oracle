const characterDescriptorList = ['stoic', 'attractive', 'passive', 'quirky', 'aloof', 'affectionate', 'generous', 'smug', 
'armed', 'clever', 'brave', 'ugly', 'sociable', 'doomed', 'connected', 'bold', 'jealous', 'angry', 'active', 'suspicious', 
'hostile', 'hardhearted', 'successful', 'talented', 'esperienced', 'deceitful', 'ambitious', 'aggressive', 'conceited', 
'proud', 'stern', 'dependent', 'wary', 'strong', 'insightful', 'dangerous', 'quirky', 'cheery', 'disfigured', 'intolerant', 
'skilled', 'stingy', 'timid', 'insensitive', 'wild', 'bitter', 'cunning', 'remorseful', 'kind', 'charming', 'oblivious', 
'critical', 'cautious', 'resourceful', 'weary', 'wounded', 'anxious', 'powerful', 'athletic', 'driven', 'cruel', 'quiet', 
'honest', 'infamous', 'dying', 'reclusive', 'artistic', 'disabled', 'confused', 'manipulative', 'relaxed', 'stealthy', 
'confident', 'weak', 'friendly', 'wise', 'influential', 'young', 'adventurous', 'opressed', 'vengeful', 'cooperative', 
'armored', 'apathetic', 'determined', 'loyal', 'sick', 'religious', 'selfish', 'old', 'fervent', 'violent', 'agreeable', 
'hot tempered', 'stubborn', 'incompetent', 'greedy', 'cowardly', 'obsessed', 'careless', 'Ironsworn'];

const nameList = ['Solana', 'Keelan', 'Cadigan', 'Sola', 'Kodroth', 'Kione', 'Katja', 'Tio', 'Artiga', 'Eos', 'Bastien', 'Elli', 
'Maura', 'Haleema', 'Abella', 'Morter', 'Wulan', 'Mai', 'Farina', 'Pearce', 'Wynne', 'Haf', 'Aeddon', 'Khinara', 'Milla', 
'Nakata', 'Kynan', 'Kiah', 'Jaggar', 'Beca', 'Ikram', 'Melia', 'Sidan', 'Deshi', 'Tessa', 'Sibila', 'Morien', 'Mona', 
'Padma', 'Avella', 'Naila', 'Lio', 'Cera', 'Ithela', 'Zhan', 'Laivan', 'Valeri', 'Hirsham', 'Pemba', 'Edda', 'Lestara', 
'Lago', 'Elstan', 'Saskia', 'Kabeera', 'Caldas', 'Nisus', 'Serene', 'Chenda', 'Themon', 'Erin', 'Alban', 'Parcell', 'Jelma', 
'Willa', 'Nadira', 'Gwen', 'Amara', 'Masias', 'Kanno', 'Razeena', 'Mira', 'Perella', 'Myrick', 'Qamar', 'Kormak', 'Zura', 
'Zanita', 'Brynn', 'Tegan', 'Pendry', 'Quinn', 'Fanir', 'Glain', 'Emelyn', 'Kendi', 'Althus', 'Leela', 'Ishana', 'Flint', 
'Delkash', 'Nia', 'Nan', 'Keeara', 'Katania', 'Morell', 'Temir', 'Bas', 'Sabine', 'Tallus'];

const roleList = ['criminal', 'healer', 'bandit', 'guide', 'performer', 'miner', 'mercenary', 'outcast', 'vagrant', 'forester', 
'traveler', 'mystic', 'priest', 'sailor', 'pilgrim', 'thief', 'adventurer', 'forager', 'leader', 'guard', 'artisan', 
'scout', 'herder', 'fisher', 'warrior', 'hunter', 'raider', 'trader', 'farmer'];

const goalList = ['obtain an object', 'make an agreement', 'build a relationship', 'undermine a relationship', 'seek truth', 
'pay a debt', 'refute a falsehood', 'harm a rival', 'cure an ill', 'find a person', 'find a home', 'seize power', 
'restore a relationship', 'create an item', 'travel to a place', 'secure provisions', 'rebel against power', 
'collect a debt', 'protect a secret', 'protect a secret', 'spread faith', 'enrich themself', 'protect a person', 
'protect the status quo', 'advance their status', 'defend a place', 'avenge a wrong', 'fulfill a duty', 'gain knowledge', 
'prove their worthiness', 'find redemption', 'escape from something', 'resolve a dispute'];

// This returns a random value from the given array
let getRandomValue = (array) => {
    let value = Math.floor(Math.random()*(array.length))
    return array[value]
};

// An example oracle using the arrays listed above, that gives you a random NPC
let CharacterOracle = () => {
    let name = getRandomValue(nameList)
    let descriptor1 = getRandomValue(characterDescriptorList)
    let descriptor2 = getRandomValue(characterDescriptorList)
    let role = getRandomValue(roleList)
    let goal = getRandomValue(goalList)

    let identity = `${name} is a ${descriptor1}, and ${descriptor2} ${role} who wants to ${goal}.`
    console.log(identity)
};
