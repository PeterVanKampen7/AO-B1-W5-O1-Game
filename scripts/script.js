//Dungeon Crawler script

var hp = 15;
var weapon = "";
var armor = "";

var room1 = false;
var room2 = false;
var room3 = false;
var room4 = false;
var room5 = false;
var room6 = false;
var room7 = false;

var roomRight1 = false;
var roomRight2 = false;

var roomLeft1 = false;
var roomLeft2 = false;
var roomLeft3 = false;

var room1Iteration = 0;
var room2Iteration = 0;
var room3Iteration = 0;
var room4Iteration = 0;
var room5Iteration = 0;
var room6Iteration = 0;
var room7Iteration = 0;

var input;

updateHP();
weaponChoice();
armorChoice();
updateProgression(1);

room_5();

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
				room1 = true;
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
				room1Iteration++;
				room_1();
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
						alert("You manage to slay the boar. Right before you hit it, it got a solid hit on your armor but you are unharmed. \n\n Room 3 Complete.");
						updateProgression(4);
						room_4();
					}
					else
					{
						alert("You manage to slay the boar with your sword, but not before it also manages to hit you. \n\n-2HP\n\n Room 3 Complete.");
						hp -= 2;
						updateHP();
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
	setTimeout(function()
	{
		if(hp>0)
		{
			input = prompt("You walk into a huge dimly lit room, and in the middle of it lies a large sleeping dragon. You will have to get past the dragon to proceed. \n\nType 'sneak' to try and sneak past the dragon. \n\nType 'attack' to attack the dragon.").toLowerCase();
			if(input == "sneak")
			{
				if(armor != "HEAVY ARMOR")
				{
					alert("You quietly make your way past the sleeping dragon. \n\n Room 4 Complete");
				}
				else
				{
					alert("You try sneak past the dragon, but the sound of your heavy armor wakes the dragon. You sprint to the other side of the room, and make it there just too late to avoid harm, the dragon's flamebreath managed to burn you just before you made it out of the room.\n\n -5HP\n\nRoom 4 Complete.");
					hp -= 5;
					updateHP();
				}
				updateProgression(5);
				room_5();
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
	setTimeout(function()
	{
		if(hp>0)
		{

		}
		else
		{
			death();
		}

	},0);
}

function room_7()
{
	setTimeout(function()
	{
		if(hp>0)
		{

		}
		else
		{
			death();
		}

	},0);
}



function death()
{
	alert("You have perished. Refresh to play again.")
}