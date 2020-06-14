<template>
  <v-card elevation="0">
    <v-card-title class="justify-center">{{ title }}</v-card-title>
    <v-card-text>
      <div class="matrix-container" :class="gridClass">
        <div
          v-for="(item, idx) in matrixItems"
          :key="item.key"
          class="matrix-item"
          :class="cellColor(idx, item)"
        >
          <v-text-field
            v-if="showSolution"
            maxlength="3"
            v-model="item.correctValue"
            solo
            hide-details
            dense
            disabled
          ></v-text-field>
          <v-text-field
            v-else
            maxlength="3"
            v-model="item.value"
            placeholder="_"
            solo
            hide-details
            dense
            :disabled="!editable"
          ></v-text-field>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Matrix, MatrixItem } from "@/common/matrix";

@Component
export default class MatrixCard extends Vue {
  @Prop({ required: true })
  public title!: string;

  @Prop({ required: true })
  public matrix!: Matrix;

  @Prop({ required: false, default: false })
  public editable!: boolean;

  @Prop({ required: false, default: false })
  public showSolution!: boolean;

  @Prop({ required: false })
  public activeRow!: number;

  @Prop({ required: false })
  public activeCol!: number;

  private matrixItems: Array<MatrixItem> = this.matrix.items;
  private infoCellClasses = "blue-grey lighten-4";
  private editableCellClasses = "picton-blue";
  private incorrectCellClasses = "rose-pearl";
  private correctCellClasses = "inchworm";

  get gridClass(): string {
    return `c${this.matrix.cols}`;
  }

  public cellColor(idx: number, cell: MatrixItem) {
    if (this.showSolution) {
      return this.correctCellClasses;
    }

    if (this.activeRow && this.matrix.getRowIdx(idx) === this.activeRow) {
      return this.correctCellClasses;
    } else if (
      this.activeCol &&
      this.matrix.getColIdx(idx) === this.activeCol
    ) {
      return this.correctCellClasses;
    }

    if (this.editable && cell.value) {
      return cell.value == cell.correctValue
        ? this.correctCellClasses
        : this.incorrectCellClasses;
    }

    return this.editable ? this.editableCellClasses : this.infoCellClasses;
  }

  @Watch("matrix")
  matrixChanged(newMatrix: Matrix) {
    this.matrixItems = newMatrix.items;
  }
}
</script>

<style lang="scss">
.matrix-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  column-gap: 5px;
  row-gap: 5px;
  /*background-color: #0abb87;*/
  /*background-color: #51cbee;*/
  justify-content: center;
}

.matrix-container.c1 {
  grid-template-columns: 60px;
}

.matrix-container.c2 {
  grid-template-columns: 60px 60px;
}

.matrix-container.c3 {
  grid-template-columns: 60px 60px 60px;
  /*grid-template-rows: 60px 60px 60px;*/
}

.matrix-container.c4 {
  grid-template-columns: 60px 60px 60px 60px;
}

.matrix-container.c5 {
  grid-template-columns: 50px 50px 50px 50px 50px;
}

.open-bracket {
  border-width: 5px;
  border-color: red;
}

.matrix-item {
  text-align: center;
  padding: 1px 2px 2px 1px;
  border: none;
  border-radius: 5px;
}

.picton-blue {
  background-color: #51cbee !important;
  border-color: #51cbee !important;
}

.inchworm {
  background-color: #cbee51 !important;
  border-color: #cbee51 !important;
}

.rose-pearl {
  background-color: #ee5165 !important;
  border-color: #ee5165 !important;
}
</style>
