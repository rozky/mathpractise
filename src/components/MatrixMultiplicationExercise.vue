<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="4" lg="4" md="4">
        <MatrixCard
          :title="`A ( ${matrixA.rows} : ${matrixA.cols} )`"
          :matrix="matrixA"
        />
      </v-col>
      <v-col cols="12" xl="4" lg="4" md="4">
        <MatrixCard
          :title="`B ( ${matrixB.rows} : ${matrixB.cols} )`"
          :matrix="matrixB"
        />
      </v-col>

      <v-col cols="12" xl="4" lg="4" md="4">
        <MatrixCard
          :title="`C = A x B ( ${matrixC.rows} : ${matrixC.cols} )`"
          :matrix="matrixC"
          :editable="true"
          :showSolution="showSolution"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import {Matrix, MatrixItem, randomMatrix} from "@/common/matrix";
import { Exercise } from "@/common/exercise";
import MatrixCard from "@/components/MatrixCard.vue";

@Component({
  components: {
    MatrixCard
  }
})
export default class MatrixMultiplicationExercise extends Vue {
  @Prop({ required: true })
  public exercise!: Exercise;

  @Prop({ required: true, default: false })
  public showSolution!: boolean;

  get matrixA(): Matrix {
    return randomMatrix(
      this.exercise.matrices[0][0],
      this.exercise.matrices[0][1]
    );
  }

  get matrixB(): Matrix {
    return randomMatrix(
      this.exercise.matrices[1][0],
      this.exercise.matrices[1][1]
    );
  }

  get matrixC(): Matrix {
    return this.matrixA.multiplyWith(this.matrixB);
  }
}
</script>
