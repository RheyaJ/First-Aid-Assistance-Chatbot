// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["tensed"],
  ["motor accident"],
  ["snake bite"],
  ["electric shock"],
  ["heat stroke"],
  ["stair case fall","slip from stairs"],
  ["burn"],
  ["dog bite"],
  ["drown","drowning"],
  ["heart attack"],
  ["fracture"],
  ["allergy reaction","allergy"],
  ["poisoning"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["DONT PANIC!!! I will guide you and be with you until u get proper medical assistance.Stay with me. Just follow my instructions. Type in the type of accident first"],
  
  ["Put the victim on ground very gently and cautiously without vigorous handling to prevent further injury. Turn the victim to one side. Loosen clothing at neck, chest and waist. Tilt the head back, point the face slightly down so the tongue can fall forward allowing blood and vomit to drain out."],
  ["Remove rings and watches before swelling starts. Wash the bite with soap and water. Cover the bite with a clean, dry dressing. Mark the leading edge of tenderness/swelling on the skin and write the time alongside it."],
  ["Turn off the source of electricity, if possible. If not, use a dry, nonconducting object made of cardboard, plastic or wood to move the source away from you and the injured person. Begin CPR if the person shows no signs of circulation, such as breathing, coughing or movement.Try to prevent the injured person from becoming chilled.Apply a bandage. Cover any burned areas with a sterile gauze bandage, if available, or a clean cloth. Don't use a blanket or towel, because loose fibers can stick to the burns."],

  ["Sponge the person with cool water. Fan the person while misting with cool water. Place ice packs or cool wet towels on the neck, armpits and groin. Cover the person with cool damp sheets."],
  ["Apply an ice pack to areas of minor pain to reduce the chance of swelling.Take over the counter pain medicine, such as ibuprofen, to reduce discomfort and inflammation.Seek emergency medical treatment for severe injuries like broken bones, open wounds or head trauma.Consult your doctor or medical professional if mild to moderate pain or injuries dont improve in several days."],
  ["Stop the burning process as soon as possible. This may mean removing the person from the area, dousing flames with water, or smothering flames with a blanket. Do not put yourself at risk of getting burnt as well.Remove any clothing or jewellery near the burnt area of skin, including babies' nappies. But do not try to remove anything that's stuck to the burnt skin, as this could cause more damage.Cool the burn with cool or lukewarm running water for 20 minutes as soon as possible after the injury. Never use ice, iced water, or any creams or greasy substances like butter.Keep yourself or the person warm. Use a blanket or layers of clothing, but avoid putting them on the injured area. Keeping warm will prevent hypothermia, where a person's body temperature drops below 35C (95F). This is a risk if you're cooling a large burnt area, particularly in young children and elderly people.Cover the burn with cling film. Lay the cling film over the burn, rather than wrapping it around a limb. A clean, clear plastic bag can be used for burns on your hand.Treat the pain from a burn with paracetamol or ibuprofen. Always check the manufacturer's instructions when using over-the-counter medication. Children under 16 years of age should not be given aspirin.Raise the affected area, if possible. This will hep to reduce swelling.When to go to hospital.Once you have taken these steps, you'll need to decide whether further medical treatment is necessary. "],
  ["Wash the bite area with soap and water. If the bite is bleeding, put pressure on it using sterile gauze or a clean cloth.If the bleeding has stopped, put antibiotic ointment on the area.Cover the area with a bandage or sterile gauze.If your child has pain, give acetaminophen or ibuprofen."],
  ["Place the drowning person on their back on a flat surface, and be careful when handling them as they may be unconscious after bumping their head against something.Try to call the drowning person and shake their shoulders to make sure they are responding.If the person does not respond, check their breathing.Ask someone to call the Red Crescent (997).If the person is breathing: Place them in the recovery position and warm them up with clothes or blankets. Change their wet clothes while waiting for the ambulance.If the person is not breathing:Elevate the head by placing a hand on the forehead and another hand down the chin and lifting it gently to clear the airway.Check their pulse by placing two fingers on the windpipe (Adam's apple).Start artificial respiration (mouth-to-mouth resuscitation) straight away by slowly blowing into the mouth of the person 5 times (for 1.5 to 2 seconds) while observing their chest as it rises with each blow. Wait until the chest drops back before you blow into their mouth again.Start cardiopulmonary resuscitation CPR (30 chest compressions).Repeat mouth-to-mouth resuscitation twice then do CPR once, until the person wakes up or until the ambulance arrives. If the drowning person starts breathing again before the ambulance arrives, they must be warmed up with clothes or blankets and their wet clothes must be changed.Monitor the patient and keep checking their pulse and breathing until the ambulance arrives."],
  ["Call 911 immediately. The 911 operator may advise taking an aspirin to help prevent a blood clot in the heart. Be sure to tell the operator if you have an aspirin allergy, a bleeding disorder, or are taking blood thinners.Sit or lie down while waiting for the ambulance and loosen any tight clothing.Stay calm. This isnt easy if you are worried about dying of a heart attack. Anxiety increases the hearts need for oxygen and is known to worsen a heart attack. Take some deep breaths and remind yourself that help is on the way.Take nitroglycerin if it prescribed to you or the person you are with. Nitroglycerin helps ease chest pain by opening up your blood vessels so your heart doesnt have to work hard.Important points to remember.Dont wait to call nine one one until symptoms go away. Every minute u delay to treating a heart attack increases the chance of permanent heart damage and death.Dont drive yourself or someone else to the hospital. You will get the fastest possible treatment by calling nine one one because emergency response teams will start treatment when they arrive at your door. Equally important, first responders know, in real time, which nearby Emergency Room is best prepared to handle your situation.Dont wait to call nine one one to make other calls like to your family doctor or insurance company. Most insurance plans cover emergency care for a possible heart attack at any hospital. The hospital staff will make any calls you need or help you do so after you are stable."],
  ["Don't move the person except if necessary to avoid further injury.Stop any bleeding. Apply pressure to the wound with a sterile bandage, a clean cloth or a clean piece of clothing.Immobilize the injured area. Don't try to realign the bone or push a bone that's sticking out back in. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort.Apply ice packs to limit swelling and help relieve pain. Don't apply ice directly to the skin. Wrap the ice in a towel, piece of cloth or some other material.Treat for shock. If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs."],
  ["Loosen tight clothing and cover the person with a blanket. Don't give the person anything to drink. If there's vomiting or bleeding from the mouth, turn the person to the side to prevent choking. If there are no signs of breathing, coughing or movement, begin CPR. call nine one one"],
  ["Check and monitor the person's airway, breathing, and pulse. If necessary, begin rescue breathing and CPR.Try to make sure that the person has indeed been poisoned. It may be hard to tell. Some signs include chemical-smelling breath, burns around the mouth, difficulty breathing, vomiting, or unusual odors on the person. If possible, identify the poison.DO NOT make a person throw up unless told to do so by poison control or a health care professional.If the person vomits, clear the person's airway. Wrap a cloth around your fingers before cleaning out the mouth and throat. If the person has been sick from a plant part, save the vomit. It may help experts identify what medicine can be used to help reverse the poisoning.If the person starts having convulsions, give convulsion first aid.Keep the person comfortable. The person should be rolled onto the left side, and remain there while getting or waiting for medical help.If the poison has spilled on the person's clothes, remove the clothing and flush the skin with water."]
  
]

// Random for any other user input

const alternative = [
   "I don't understand.Please type in the type of accident(Example:motor accident,snake bite,etc."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]