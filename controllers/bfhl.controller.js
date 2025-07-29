export const handleBfhlRequest = (req, res) => {
    const {data} = req.body;
    if (!Array.isArray(data)) {
    return res.status(400).json({
      isSuccess: false,
      message: "Invalid input data",
    });
  }
    const fullName = "prabhat_kumar";
    const dob = "18122003";
    const user_id = `${fullName}_${dob}`;
    const response = {
        is_success: true,
        user_id,
        email: "prabhat2048.be22@chitkara.edu.in",
        roll_number: "2210992048",
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };
    let sum = 0;
    const alphabetsOnly = [];
    data.forEach(item => {
        const str = String(item);
        if (/^[0-9]+$/.test(str)) {
            const num = parseInt(str, 10);
            sum += num;
            (num % 2 === 0 ? response.even_numbers : response.odd_numbers).push(str);
        }
        else if (/^[a-zA-Z]+$/.test(str)) {
            response.alphabets.push(str.toUpperCase());
            alphabetsOnly.push(...str.split(''));
        }
        else {
            response.special_characters.push(str);
        }
    });
    response.sum = sum.toString();

    const reversed = alphabetsOnly.reverse();
    const altCaps = reversed.map((chr, idx) =>
        idx % 2 === 0 ? chr.toUpperCase() : chr.toLowerCase()
    ).join('');

    response.concat_string = altCaps;
    res.status(200).json(response);
}