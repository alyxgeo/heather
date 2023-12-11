import supabase from "./supabase";


//fetching cabin
export async function getCottage() {
    const { data, error } = await supabase.from('cottage').select('*')
    if (error) {
        console.log(error);
        throw new Error("cottage could not be loaded")
    }
    return data;
}



//deleting cabin
export async function deleteCabin(id) {
    const { error } = await supabase.from('cottage').delete().eq('id', id)


    if (error) {
        console.log(error);
        throw new Error("cottage could not be deleted")
    }
}