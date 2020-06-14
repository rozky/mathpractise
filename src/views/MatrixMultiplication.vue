<template>
  <v-container>
    <div class="text-center">
      <h1>Multiply two matrices</h1>
      <p>
        Fill in the missing numbers in the latest matrix C = A x B.
      </p>
    </div>
    <div>
      <v-stepper v-model="currentExerciseIdx" non-linear alt-labels>
        <v-stepper-header>
          <template v-for="(exercise, idx) in exercises">
            <v-stepper-step editable :key="`${idx}-step`" :step="idx + 1"
              >{{ exercise.matrices[0][0] }}:{{ exercise.matrices[0][1] }} x
              {{ exercise.matrices[1][0] }}:{{
                exercise.matrices[1][1]
              }}</v-stepper-step
            >
            <v-divider :key="`${idx}-divider`" />
          </template>
        </v-stepper-header>
      </v-stepper>
    </div>
    <MatrixMultiplicationExercise
      :exercise="currentExercise"
      :showSolution="showSolution"
    />
    <div class="text-center">
      <v-btn @click="toggleShowSolution" text color="light-blue darken-3">
        <v-icon left>mdi-eye</v-icon>
        <span v-if="showSolution">Hide Solution</span>
        <span v-else>Show Solution</span>
      </v-btn>
      <v-btn
        v-if="currentExerciseIdx < exercises.length"
        @click="showNextExercise"
        class="ma-2"
        tile
        color="amber darken-4"
        dark
      >
        <v-icon left>mdi-skip-next</v-icon>Try Again
      </v-btn>
      <v-btn
        v-if="currentExerciseIdx < exercises.length"
        @click="showNextExercise"
        class="ma-2"
        tile
        color="amber darken-4"
        dark
      >
        <v-icon left>mdi-skip-next</v-icon>Next Exercise
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MatrixMultiplicationExercise from "@/components/MatrixMultiplicationExercise.vue";
import { Exercise } from "@/common/exercise";

@Component({
  components: {
    MatrixMultiplicationExercise
  }
})
export default class MatrixMultiplication extends Vue {
  private exercises = [
    new Exercise([
      [1, 2],
      [2, 1]
    ]),
    new Exercise([
      [2, 2],
      [2, 1]
    ]),
    new Exercise([
      [2, 2],
      [2, 2]
    ]),
    new Exercise([
      [3, 3],
      [3, 2]
    ]),
    new Exercise([
      [2, 3],
      [3, 4]
    ]),
    new Exercise([
      [1, 3],
      [3, 1]
    ]),
    new Exercise([
      [2, 5],
      [5, 5]
    ]),
    new Exercise([
      [4, 4],
      [4, 4]
    ])
  ];
  private currentExerciseIdx = 1;
  private showSolution = false;

  get currentExercise(): Exercise {
    return this.exercises[this.currentExerciseIdx - 1];
  }

  public showNextExercise() {
    this.currentExerciseIdx += 1;
  }

  public toggleShowSolution() {
    this.showSolution = !this.showSolution;
  }

  @Watch("currentExerciseIdx")
  currentExerciseIdxChanged() {
    this.showSolution = false;
  }
}
</script>
