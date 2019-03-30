/*
 * Created on Sat Mar 30 2019
 *
 * Copyright (c) 2019 Your Company
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.description = description;
    this.name = name;
    this.imagePath = imagePath;
  }
}
