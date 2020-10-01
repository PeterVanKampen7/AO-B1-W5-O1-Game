//Dungeon Crawler script

var hp = 15;
var weapon = "";
var armor = "";

var room1Iteration = 0;
var room3Iteration = 0;
var roomR1Iteration = 0;
var roomL2Iteration = 0;

var trollHP = 6;
var key = false;

var input;

setCharName();
updateHP();
weaponChoice();
armorChoice();
updateProgression(1);

room_1();

function setCharName()
{
	var name = prompt("What is the name of your adventurer?");
	document.getElementById("charName").innerHTML = name;
}

function updateHP() 
{
	document.getElementById("hp").innerHTML = "HP: "+hp;
}

function weaponChoice()
{
	var weaponSelect = prompt("Please select your weapon of choice. Sword, Spear or Bow.").toUpperCase();
	if(weaponSelect == "SWORD" || weaponSelect == "SPEAR" || weaponSelect == "BOW")
	{
		weapon = weaponSelect;
		document.getElementById("weapon").innerHTML = "WEAPON: "+weapon;
	}
	else
	{
		alert("No valid input found");
		weaponChoice();
	}
}

function armorChoice()
{
	var armorSelect = prompt("Please select your armor of choice. Light, Medium or Heavy.").toUpperCase();
	if(armorSelect == "LIGHT"  || armorSelect == "MEDIUM" || armorSelect == "HEAVY")
	{
		armor = armorSelect + " ARMOR";
		document.getElementById("armor").innerHTML = "ARMOR: "+armor;
	}
	else
	{
		alert("No valid input found");
		armorChoice();
	}
}

function updateProgression(param)
{
	document.getElementById("progression").innerHTML = "PROGRESSION: ROOM "+param;
}

function room_1()
{
	console.log("Room 1");
	setTimeout(function()
	{
		if(hp>0)
		{
			if(room1Iteration == 0)
			{
				input = prompt("You enter the dungeon, your trusty weapon in hand and your armor strapped tight. The first room is a completely empty room, except for the one solitary goblin standing in the middle of it. The goblin makes to attack you. \n\n Type 'attack' to attack the goblin. \n\n Type 'defend' to defend yourself.").toLowerCase();
			}
			else
			{
				input = prompt("The goblin still stands. \n\n Type 'attack' to attack the goblin. \n\n Type 'defend' to defend yourself.").toLowerCase();
			}

			if(input == "attack")
			{
				alert("The goblin charges you, but before he reaches you you make a swift strike and the goblin falls at your feet. \n\n Room 1 Complete.")
				updateProgression(2);
				room_2();
			}
			else if(input == "defend")
			{
				if(armor == "LIGHT ARMOR")
				{
					alert("The goblin strikes you, and your armor isnt thick enough to shield you from harm. -1 HP")
					hp -= 1;				
					updateHP();				
				}
				else
				{
					alert("The goblin hits you, but your armor is thick and you take no damage.")
				}

				if(!checkDeath())
				{
					room1Iteration++;
					room_1();
				}
			}
			else
			{
				alert("No valid input found.")
				room_1();
			}
		}
		else
		{
			death();
		}
	},0);	
}

function room_2()
{
	console.log("Room 2");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("This room is a very wide but not very lenghty room. There is no one but you in this room, but straight through the middle of it courses a fast flowing stream. \n\nYou have to cross the stream to get across, will you jump or swim?").toLowerCase();
			if(input == "jump")
			{
				alert("You only barely made the jump, but you succesfully make it over to the other side. \n\n Room 2 Complete");
				updateProgression(3);
				room_3();
			}
			else if(input == "swim")
			{
				if(armor == "LIGHT ARMOR")
				{
					alert("You almost drowned, but you succesfully make it over to the other side. \n\n Room 2 Complete");
					updateProgression(3);
					room_3();
				}
				else
				{
					alert("Try as you might, your armor is too heavy to keep you afloat in these currents.")
					death();
				}
			}
			else
			{
				alert("No valid input found.")
				room_2();
			}
		}
		else
		{
			death();
		}
	},0);
}

function room_3()
{
	console.log("Room 3");
	setTimeout(function()
	{
		if(hp>0)
		{
			if(room3Iteration == 0)
			{
				input = prompt("You walk into the next room. In front of you, you see a wild boar that immediately attacks you. \n\n Type 'attack' to attack the boar. \n\n Type 'defend' to defend yourself.").toLowerCase();
			}
			else
			{
				input = prompt("The boar is still alive and coming around for another attack. \n\n Type 'attack' to attack the boar. \n\n Type 'defend' to defend yourself.").toLowerCase();
			}

			if(input == "attack")
			{
				if(weapon == "SWORD")
				{
					if(armor == "HEAVY ARMOR")
					{
						alert("You manage to slay the boar. Right before you hit it, it got a solid hit on your armor but you are unharmed.");
					}
					else
					{
						alert("You manage to slay the boar with your sword, but not before it also manages to hit you. \n\n-2HP");
						hp -= 2;
						updateHP();
					}
					if(!checkDeath())
					{
						alert("Room 3 Complete.")
						updateProgression(4);
						room_4();
					}
				}
				else
				{
					alert("You kill the boar with your weapon before it manages to reach you. \n\nRoom 3 Complete");
					updateProgression(4);
					room_4();
				}
			}
			else if(input == "defend")
			{
				if(armor == "HEAVY ARMOR")
				{
					alert("You take a big hit from the boar, but your defensive manouvre and your heavy armor protects you from harm.");				
				}
				else
				{
					alert("Your defensive manouvre wasnt good enough to avoid the boar, and your armor failed to protect you. \n\n -3HP");
					hp -= 3;
					updateHP();
				}
				room3Iteration++;
				room_3();
			}
			else
			{
				alert("No valid input found.")
				room_3();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_4()
{
	console.log("Room 4");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("You walk into a huge dimly lit room, and in the middle of it lies a large sleeping dragon. You will have to get past the dragon to proceed. \n\nType 'sneak' to try and sneak past the dragon. \n\nType 'attack' to attack the dragon.").toLowerCase();
			if(input == "sneak")
			{
				if(armor != "HEAVY ARMOR")
				{
					alert("You quietly make your way past the sleeping dragon.");
				}
				else
				{
					alert("You try sneak past the dragon, but the sound of your heavy armor wakes the dragon. You sprint to the other side of the room, and make it there just too late to avoid harm, the dragon's flamebreath managed to burn you just before you made it out of the room.\n\n -5HP");
					hp -= 5;
					updateHP();
				}

				if(!checkDeath())
				{
					alert("Room 4 Complete");
					updateProgression(5);
					room_5();
				}
				
			}
			else if(input == "attack")
			{
				alert("You attack the dragon with your weapon, but your attack bounces off its scales harmlessly. The now awoken dragon roasts you alive with its flamebreath.");
				death();
			}
			else
			{
				alert("No valid input found.")
				room_4();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_5()
{
	console.log("Room 5");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("The next room is a small empty room. In the middle of the room stands a closed treasure chest.\n\nType 'open' to open the chest.\n\nType 'ignore' to ignore the chest and proceed to the next room.").toLowerCase();
			if(input == "open")
			{
				alert("You approach the chest to open it, but the moment you get close the chest reveals itself to be a mimic and its large fanged gaping maw devours you.")
				death();
			}
			else if (input == "ignore") 
			{
				alert("You ignore the chest and proceed to the next room.\n\nRoom 5 Complete.")
				updateProgression(6);
				room_6();
			}
			else
			{
				alert("No valid input found.")
				room_5();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_6()
{
	console.log("Room 6");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("You enter the next room, and the moment you do you hear a sound coming from above. Looking up you see a very high ceiling, and a huge sword falling right on top of you. \n\nType 'brace' to brace yourself for impact. \n\nType 'dodge' to try and dodge out of the way.").toLowerCase();
			if(input == "brace")
			{
				if(armor == "HEAVY ARMOR")
				{
					alert("You brace for impact and the sword hits you. The hit is hard but your armor is thick and you escape without receiving any damage.");
					alert("Room 6 Complete.")
					updateProgression(7);
					room_7();
				}
				else
				{
					alert("You brace for impact, but its not enough. The sword is heavy and sharp and your armor is not thick enough. \n\n-14HP");
					hp -= 14;
					updateHP();
					if(!checkDeath())
					{
						alert("Room 6 Complete");
						updateProgression(7);
						room_7();
					}
				}

			}
			else if(input == "dodge")
			{
				if(armor == "LIGHT ARMOR")
				{
					alert("Using your quick reflexes you try and jump out the way before the sword impacts the ground. Your light armor luckily does not impair your movement in any way and you succesfully get out the way and escape harm.");
					alert("Room 6 Complete.")
					updateProgression(7);
					room_7();
				}
				else if(armor == "MEDIUM ARMOR")
				{
					alert("You try to dodge out of the way, but your Medium Armor limits your movement a bit. You manage to get all your vital areas out of the way of the sword, but you still get hit.\n\n-8HP");
					hp -= 8;
					updateHP();
					if(!checkDeath())
					{
						alert("Room 6 Complete");
						updateProgression(7);
						room_7();
					}
				}
				else
				{
					alert("You make to get out of the way of the falling sword, but you are wearing heavy steel armor, and your movement is very restricted. You barely managae to get out of the way at all.\n\n-14HP");
					hp -= 14;
					updateHP();
					if(!checkDeath())
					{
						alert("Room 6 Complete");
						updateProgression(7);
						room_7();
					}
				}

			}
			else
			{
				alert("No valid input found.")
				room_6();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_7()
{
	console.log("Room 7");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("This room is completely empty. The only distinguishing thing in this room is the fact that this room has two exits, you will have to choose which exit to go through.\n\nType 'right' to take the exit on the right. \n\nType 'left' to take the exit on the left.").toLowerCase();
			if(input == "right")
			{
				alert("You proceed through the exit on the right.");
				alert("Room 7 Complete.");
				updateProgression(8);
				room_right_1();
			}
			else if(input == "left")
			{
				alert("You proceed through the exit on the left.");
				alert("Room 7 Complete.");
				updateProgression(8);
				room_left_1();
			}
			else
			{
				alert("No valid input found.")
				room_7();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_right_1()
{
	console.log("Room Right Path 1");
	setTimeout(function()
	{
		if(hp>0)
		{
			if(trollHP >= 0)
			{	
				if(roomR1Iteration == 0)
				{
					input = prompt("The enter the room and the door closes behind you. In front of you you see a massive troll wielding a tree trunk, and it is clearly not happy to see you. \n\nType 'attack' to attack the troll. \n\nType 'defend' to defend yourself from its strikes.").toLowerCase();
				}
				else
				{
					input = prompt("You keep your eyes strained on the troll, and it seems ready to attack again. \n\nType 'attack' to atrack the troll. \n\nType 'defend' to defend yourself from its strikes.").toLowerCase();
				}

				if(input == "attack")
				{
					if(weapon == "BOW")
					{
						alert("You draw back your arrow and sink it into the troll, but it does not stagger and you fail to get out of the way of its strike. -2HP");
						trollHP -= 2;
						hp -= 2;
						updateHP();
					}
					else
					{
						alert("You run at the troll and strike it with your weapon, your weapon draws blood but the troll does not stagger and still hits you. -2HP");
						trollHP -= 3;
						hp -= 2;
						updateHP();
					}


				}
				else if(input == "defend")
				{
					if(armor == "LIGHT ARMOR")
					{
						alert("You attempt to nimbly dodge out of the way of the swings of the troll. But it's tree trunk is large and there is only so much you can dodge out of the way of. Still, through your defensive manouvre you manage to minimize the damage you take. -1HP");
						hp -=1;
						updateHP();
					}
					else
					{
						alert("You dodge as many attacks as you can until you take one to your armor. You get thrown from the impact, but you are unharmed.");
					}
				}
				else
				{
					alert("No valid input found.")				
				}

				roomR1Iteration++;
				room_right_1();
			}
			else
			{
				alert("The troll lies dead at your feet. You took some hits but you have managed to overcome yet another obstacle.");
				alert("Room 8 Complete");
				updateProgression(9);
				room_right_2();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_right_2()
{
	console.log("Room Right Path 2");
	setTimeout(function()
	{
		if(hp>0)
		{
			alert("You enter the next room and it is completely empty. Wary of a trap or ambush you slowly creep into the room. About when you reach the center of the room you hear a click and the floor falls out from underneath your feet. While plumeting downward you look below and see a spike trap. There is nothing you can do.");
			death();
		}
		else
		{
			death();
		}

	},0);
}

function room_left_1()
{
	console.log("Room Left Path 1");
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("Similar to the one you saw before, the only thing this room contains is a treasure chest. \n\nType 'open' to open the chest.\n\nType 'ignore' to ignore the chest and move on.").toLowerCase();
			if(input == "open")
			{
				alert("You warily open the chest, expecting a trap of some sorts. But the chest opens without trouble and inside you find a shining golden key.");
				alert("Room 8 Complete.");
				key = true;
				updateProgression(9);
				room_left_2();
			}
			else if(input == "ignore")
			{
				alert("Just like with the previous chest you ignore it and proceed to the next room.");
				alert("Room 8 Complete.");
				updateProgression(9);
				room_left_2();
			}
			else
			{
				alert("No valid input found.")
				room_left_1();
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_left_2()
{
	console.log("Room Left Path 2");
	setTimeout(function()
	{
		if(hp>0)
		{
			if(roomL2Iteration == 0)
			{
				if(armor == "LIGHT ARMOR")
				{
					alert("You walk into the next room, but the floor in this room is an illusion. You fall down about 10 meters.");
				}
				else if(armor == "MEDIUM ARMOR")
				{
					alert("You walk into the next room, but the floor in this room is an illusion. You fall down about 10 meters. -3HP");
					hp -= 3;
					updateHP();
				}
				else
				{
					alert("You walk into the next room, but the floor in this room is an illusion. You fall down about 10 meters. -8HP");
					hp -= 8;
					updateHP();
				}

				if(!checkDeath())
				{
					roomL2Iteration++;
					room_left_2();
				}
			}
			else
			{
				alert("You pick yourself up off the floor and look around you, inspecting this new room you find yourself in. The room is empty, but the one exit out of the room is a closed wooden door. There is a big golden lock keeping the door locked.");
				if(key)
				{
					alert("You use the golden key you found earlier and you succesfully open the door.");
					alert("Room 9 Complete.")
					updateProgression(10);
					room_left_3();
				}
				else
				{
					if(weapon == "SWORD")
					{
						input = prompt("Would you like to try and break down the door with your sword? \n\nType 'yes' to try and break the door. \n\nType 'no' to not try and break the door.").toLowerCase();
						if(input == "yes")
						{
							alert("You start hacking into the door with your sword. It is slow going, but you are breaking down the door strike by strike. Eventually you create a hole big enough for you to fit through. You made it but your sword seems quite badly damaged.");
							alert("Room 9 Complete.")
							updateProgression(10);
							room_left_3();
						}
						else if(input == "no")
						{
							alert("You have no way to make it out of this room. Your sword lies useless on the floor. You have tried climbing the walls, but you failed to find purchase on them. You tried picking the lock with whatever you had on you or found in the room, but to no avail. Eventually you collapse to the floor and die of dehydration.");
							death();
						}
						else
						{
							alert("No valid input found.")
							room_left_2();	
						}
					}
					else
					{
						alert("You have no way to make it out of this room. You have tried climbing the walls, but you failed to find purchase on them. You have broken your weapon while trying to use it to break open the door. You tried picking the lock with whatever you had on you or found in the room, but to no avail. Eventually you collapse to the floor and die of dehydration.");
						death();
					}
				}
			}
		}
		else
		{
			death();
		}

	},0);
}

function room_left_3()
{
	console.log("Room Left Path 3");
	//document.getElementById("core").style.backgroundImage = "url('images/treasure.jpg')";
	setTimeout(function()
	{
		alert("You walk into the room and there is gold everywhere. There is more gold here then you could spend in your entire lifetime. And it is all yours.");
		alert("Victory");
	},0);
}

function checkDeath()
{
	if(hp>0)
	{		
		return false;
	}
	else
	{
		death();
		return true;
	}
}

function death()
{
	alert("You have perished. Refresh to play again.")
}