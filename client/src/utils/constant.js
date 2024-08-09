export const USER_API_END_POINT="https://job-hunt-fawn.vercel.app/api/v1/user";
export const JOB_API_END_POINT="https://job-hunt-fawn.vercel.app/api/v1/job";
export const APPLICATION_API_END_POINT="https://job-hunt-fawn.vercel.app/api/v1/application";
export const COMPANY_API_END_POINT="https://job-hunt-fawn.vercel.app/api/v1/company";
export const server = import.meta.env.MODE === "development" ? "http://localhost:8000" : "";
