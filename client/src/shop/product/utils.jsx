import { StaffService } from "@miq/utils";

class StaffProductService extends StaffService {
  constructor(path) {
    super(path);
  }

  publish(prodSlug) {
    return this.patchPath(`${this.path}${prodSlug}/publish/`, {});
  }

  getSheinProductData(values) {
    return this.postPath(`${this.path}shein/`, values, { timeout: 10000 });
  }

  // ATTR

  postAttribute(prodSlug, values) {
    return this.postPath(`${this.path}${prodSlug}/attribute/new/`, values);
  }

  patchAttribute(prodSlug, attrSlug, values, oldValues) {
    return this.patchPath(`${this.path}${prodSlug}/attribute/${attrSlug}/`, values, oldValues);
  }

  deleteAttribute(prodSlug, attrSlug) {
    return this.deletePath(`${this.path}${prodSlug}/attribute/${attrSlug}/`);
  }

  // PAGE

  patchPage(prodSlug, values, oldValues) {
    return this.patchPath(`${this.path}${prodSlug}/page/`, values, oldValues);
  }
}

export const productServices = new StaffProductService("products/");
