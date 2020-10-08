export interface Serializable {
    toJSON: () => {[key: string]: any} 
}