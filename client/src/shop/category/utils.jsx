import { StaffService } from "@miq/utils";

class StaffCategoryService extends StaffService {
  constructor(path) {
    super(path);
  }

  patchPage(catSlug, values, oldValues) {
    return this.patchPath(`${this.path}${catSlug}/page/`, values, oldValues);
  }
}

export const catServices = new StaffCategoryService("categories/");
