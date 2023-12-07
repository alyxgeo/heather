import supabase from "./supabase";

export async function getCottage() {

    const { data, error } = await supabase.from('cottage').select('*')

    if (error) {
        console.log(error);
        throw new Error("cottage could not be loaded")
    }
    return data;

}