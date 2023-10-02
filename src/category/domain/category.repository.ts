// import {
//   IRepository,
//   ISearchableRepository,
// } from "../../shared/domain/repository/repository-interface";
// import { SearchParams } from "../../shared/domain/repository/search-params";
// import { SearchResult } from "../../shared/domain/repository/search-result";

import { IRepository } from "../../shared/domain/repository/repository-interface";
import { Uuid } from "../../shared/domain/value-objects/uuid.vo";
import { Category } from "./category.entity";

// export type CategoryFilter = string;

// export class CategorySearchParams extends SearchParams<CategoryFilter> {}

// export class CategorySearchResult extends SearchResult<Category> {}

export interface ICategoryRepository extends IRepository<Category, Uuid> {}
//   extends ISearchableRepository<
//     Category,
//     Uuid,
//     CategoryFilter,
//     CategorySearchParams,
//     CategorySearchResult
//   > {}
