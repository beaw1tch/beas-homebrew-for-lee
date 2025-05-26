// Custom Dice Face Module for Dice So Nice
// Replaces the highest number on each die with a custom hexagonal eye image

Hooks.once('diceSoNiceReady', (dice3d) => {
    // Add a custom system for your dice
    dice3d.addSystem({
        id: "hexagonal-eye", 
        name: "Hexagonal Eye Dice"
    }, true);

    // D4 - Replace 4 with custom image
    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "1",
            "2", 
            "3",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png" // Replace path with your image
        ],
        system: "hexagonal-eye"
    });

    // D6 - Replace 6 with custom image
    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3", 
            "4",
            "5",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png"
        ],
        system: "hexagonal-eye"
    });

    // D8 - Replace 8 with custom image
    dice3d.addDicePreset({
        type: "d8",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png"
        ],
        system: "hexagonal-eye"
    });

    // D10 - Replace 10 (0) with custom image
    dice3d.addDicePreset({
        type: "d10",
        labels: [
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png", // 0 is at index 0
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ],
        system: "hexagonal-eye"
    });

    // D12 - Replace 12 with custom image
    dice3d.addDicePreset({
        type: "d12",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png"
        ],
        system: "hexagonal-eye"
    });

    // D20 - Replace 20 with custom image
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png"
        ],
        system: "hexagonal-eye"
    });

    // D100 - Replace 00 with custom image (if you use d100s)
    dice3d.addDicePreset({
        type: "d100",
        labels: [
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png", // 00 is at index 0
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90"
        ],
        system: "hexagonal-eye"
    });

    console.log("Hexagonal Eye dice system loaded!");
});

// Alternative: If you want to modify the existing system instead of creating a new one
// Use this instead of the above code if the custom system isn't working:

/*
Hooks.once('diceSoNiceReady', (dice3d) => {
    // Modify the default system directly
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "1","2","3","4","5","6","7","8","9","10",
            "11","12","13","14","15","16","17","18","19",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png" // Replace 20
        ],
        system: "standard" // Use existing standard system
    }, true); // The 'true' parameter forces override of existing preset
    
    // Add more dice types as needed...
    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1","2","3","4","5",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png" // Replace 6
        ],
        system: "standard"
    }, true);
    
    console.log("Custom dice faces loaded into standard system!");
});
*/

// SIMPLER ALTERNATIVE: Just modify existing standard presets
/*
Hooks.once('diceSoNiceReady', (dice3d) => {
    // Override just the d20 for testing
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "1","2","3","4","5","6","7","8","9","10",
            "11","12","13","14","15","16","17","18","19",
            "modules/beas-homebrew-for-lee/images/hexagonal-eye.png"
        ]
    }, "standard");
    
    console.log("Custom d20 face loaded!");
});
*/