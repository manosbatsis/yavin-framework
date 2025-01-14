/**
 * Copyright 2022, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 *
 * Usage:
 *   <FilterValues::MultiValueInput
 *     @filter={{this.filter}}
 *     @onUpdateFilter={{this.update}}
 *   />
 */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Args from './args-interface';
import type { Filter } from '@yavin/client/request';

export default class MultiValueInput extends Component<Args> {
  @tracked tags: Filter['values'] = [];

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    this.tags = this.args.filter.values || [];
  }

  /**
   * @action addValue
   * @param tag - Add single value to the filter values list
   */
  @action
  addValue(tag: string | number) {
    const tags = [...this.tags, tag];

    this.args.onUpdateFilter({
      values: tags.slice(),
    });
    this.tags = tags;
  }

  /**
   * @action removeValueAtIndex
   * @param {Number} index - index of value to remove
   */
  @action
  removeValueAtIndex(index: number) {
    const tags = [...this.tags];
    tags.splice(index, 1);

    this.args.onUpdateFilter({
      values: tags.slice(),
    });
    this.tags = tags;
  }
}
