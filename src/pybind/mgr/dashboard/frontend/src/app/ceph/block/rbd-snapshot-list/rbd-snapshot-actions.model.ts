import { CdTableAction } from '../../../shared/models/cd-table-action';
import { CdTableSelection } from '../../../shared/models/cd-table-selection';

export class RbdSnapshotActionsModel {
  create: CdTableAction = {
    permission: 'create',
    icon: 'fa-plus',
    name: 'Create'
  };
  rename: CdTableAction = {
    permission: 'update',
    icon: 'fa-pencil',
    name: 'Rename'
  };
  protect: CdTableAction = {
    permission: 'update',
    icon: 'fa-lock',
    visible: (selection: CdTableSelection) =>
      selection.hasSingleSelection && !selection.first().is_protected,
    name: 'Protect'
  };
  unprotect: CdTableAction = {
    permission: 'update',
    icon: 'fa-unlock',
    visible: (selection: CdTableSelection) =>
      selection.hasSingleSelection && selection.first().is_protected,
    name: 'Unprotect'
  };
  clone: CdTableAction = {
    permission: 'create',
    buttonCondition: (selection: CdTableSelection) => selection.hasSingleSelection,
    disable: (selection: CdTableSelection) =>
      !selection.hasSingleSelection || selection.first().cdExecuting,
    icon: 'fa-clone',
    name: 'Clone'
  };
  copy: CdTableAction = {
    permission: 'create',
    buttonCondition: (selection: CdTableSelection) => selection.hasSingleSelection,
    disable: (selection: CdTableSelection) =>
      !selection.hasSingleSelection || selection.first().cdExecuting,
    icon: 'fa-copy',
    name: 'Copy'
  };
  rollback: CdTableAction = {
    permission: 'update',
    icon: 'fa-undo',
    name: 'Rollback'
  };
  deleteSnap: CdTableAction = {
    permission: 'delete',
    icon: 'fa-times',
    disable: (selection: CdTableSelection) => {
      const first = selection.first();
      return !selection.hasSingleSelection || first.cdExecuting || first.is_protected;
    },
    name: 'Delete'
  };
  ordering = [
    this.create,
    this.rename,
    this.protect,
    this.unprotect,
    this.clone,
    this.copy,
    this.rollback,
    this.deleteSnap
  ];
}
