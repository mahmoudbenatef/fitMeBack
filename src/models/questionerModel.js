const mongoose = require("mongoose");


const QuestionerScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    areYouSomker: {
        type: Boolean,
        required: true,
    },
    doYouDrinkAlcohol: {
        type: Boolean,
        required: true,
    },
    howOftenDoYouEatJunkFoodPerWeek: {
        type: Number,
        required: true,
    },
    howManyGlassesOfWaterDoYouDrinkPerDay: {
        type: Number,
        required: true,
    },
    HowManyCupsOfCoffeeDoYouDrinkPerDay: {
        type: Number,
        required: true,
    },
    howManyGlassesOfSodaDrinksDoYouDrinkPerDay: {
        type: Number,
        required: true,
    },
    howManyMealsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    howManyVegetablePortionsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    howManyFruitPortionsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    howManyProteinPortionsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    howManyCarbohydratePortionsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    howManySweetPortionsDoYouEatPerDay: {
        type: Number,
        required: true,
    },
    willYouEatSpicyFood: {
        type: Boolean,
        required: true,
    },
    willYouEatFoodContainingGluten: {
        type: Boolean,
        required: true,
    },
    doYouHaveAnyFoodAllergiesOrIntolerances: {
        type: String,
    },
    pleaseStateTheTypesOfFoodAndBeveragesYouEatInYourGeneralRoutine: {
        type: String,
    },
    areThereAnyFoodsYouCannotOrWillNotEat: {
        type: String,
    },
    foodAndBeveragesThatYouWouldLikeToAdd: {
        type: String,
    },
    doYouCurrentlyExercise: {
        type: String,
    },
    didYouUseToExerciseInThePast: {
        type: String,
    },
    informationRelatedToFitnessAndExerciseThatYouWouldLikeToAdd: {
        type: String,
    },
    heartCondition: {
        type: Boolean,
        required: true,
    },
    feelPainInYourChest: {
        type: Boolean,
        required: true,
    },
    feelFaintOrDizzy: {
        type: Boolean,
        required: true,
    },
    jointProblem: {
        type: Boolean,
        required: true,
    },
    highLowBloodPressure: {
        type: Boolean,
        required: true,
    },
    reasonWhyYouShouldNotParticipateInPhysicalActivity: {
        type: String,
    },
    takingAnyMedicationOfWhichWeShouldBeMadeAwareOf: {
        type: String,
    },
    majorOrMinorSurgeryShouldBeMadeAwareOf: {
        type: String,
    },

    created: {
        type: Date,
        default: Date.now,
    },
}
    , {
        writeConcern: {
            j: true,
            wtimeout: 1000,
        },
    });




const QuestionerModel = mongoose.model("Questioner", QuestionerScheme);
module.exports = QuestionerModel;
